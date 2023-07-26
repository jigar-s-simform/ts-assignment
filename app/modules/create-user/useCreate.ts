import { FormikProps, useFormik } from 'formik';
import { useState } from 'react';
import { Alert, ColorSchemeName, useColorScheme } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  PERMISSIONS,
  Permission,
  PermissionStatus,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import { CameraTypes, MediaTypes, StorageConstants, Strings } from '../../constants';
import { useInitializeRefs, usePermissionStatus } from '../../hooks';
import {
  addUser,
  homeSelector,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { globalMetrics } from '../../theme';
import {
  SignUpSchemaTypes,
  navigateBack,
  requestPermission,
  signUpSchema,
} from '../../utils';
import { Images } from '../../assets';
import { useMMKVString } from 'react-native-mmkv';
import { ThemeType, mmkvStorage } from '../../services';

interface CustomHookProps {
  imagePath: string | number | undefined;
  setImagePath: React.Dispatch<React.SetStateAction<string | number | undefined>>;
}

export interface UseCreateReturnType {
  imagePath: string | number | undefined
  modalShown: boolean
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>
  handleProfileSelect: () => void
  formik: FormikProps<SignUpSchemaTypes>
  formRefs: React.MutableRefObject<any[]>
  handleCameraSelect: () => Promise<void>
  handleGallerySelect: () => Promise<void>
  theme: ThemeType
}

const useCreate = ({ imagePath, setImagePath }: CustomHookProps): UseCreateReturnType => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(homeSelector);
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme] = useMMKVString(StorageConstants.themeStorageKey, mmkvStorage);
  
  const cameraPermission: Permission = globalMetrics.isAndroid
    ? PERMISSIONS.ANDROID.CAMERA
    : PERMISSIONS.IOS.CAMERA;
  const galleryPermision: Permission = globalMetrics.isAndroid
    ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    : PERMISSIONS.IOS.PHOTO_LIBRARY;

  const cameraPermissionStatus: PermissionStatus =
    usePermissionStatus(cameraPermission);
  const galleryPermisionStatus: PermissionStatus =
    usePermissionStatus(galleryPermision);

  const [modalShown, setModalShown] = useState<boolean>(false);
  const formRefs: React.MutableRefObject<any[]> = useInitializeRefs(4);

  const openDeviceCamera = async (): Promise<void> => {
    try {
      const imageCaptureResponse = await launchCamera({
        mediaType: MediaTypes.photo,
        cameraType: CameraTypes.back,
      });
      if (!imageCaptureResponse.didCancel) {
        setImagePath(
          imageCaptureResponse.assets
            ? imageCaptureResponse.assets[0]?.uri
            : imagePath,
        );
      } else return;
    } catch (e) {
      setImagePath(Images.defaultImg);
    }
    setModalShown(false);
  };

  const openDeviceGallery = async (): Promise<void> => {
    try {
      const imageSelectionResponse = await launchImageLibrary({
        mediaType: MediaTypes.photo,
      });
      if (!imageSelectionResponse.didCancel) {
        setImagePath(
          imageSelectionResponse.assets
            ? imageSelectionResponse.assets[0]?.uri
            : imagePath,
        );
      } else return;
    } catch (e) {
      setImagePath(Images.defaultImg);
    }
    setModalShown(false);
  };

  const handleProfileSelect = (): void => setModalShown(true);

  const handleCameraSelect = async (): Promise<void> => {
    if (cameraPermissionStatus === RESULTS.UNAVAILABLE)
      Alert.alert(Strings.featureUnavailable);
    else if (
      cameraPermissionStatus === RESULTS.DENIED ||
      cameraPermissionStatus === RESULTS.GRANTED
    ) {
      if (cameraPermissionStatus === RESULTS.GRANTED) openDeviceCamera();
      if (cameraPermissionStatus === RESULTS.DENIED) {
        const permissionStatus: PermissionStatus = await requestPermission(
          cameraPermission,
        );
        if (permissionStatus === RESULTS.GRANTED) openDeviceCamera();
      }
    } else {
      Alert.alert(Strings.camera, Strings.weNeedPermission, [
        {
          text: Strings.cancelBtn,
          onPress: () => { return },
        },
        {
          text: Strings.providePermission,
          onPress: () => openSettings(),
        },
      ]);
    }
  };

  const handleGallerySelect = async (): Promise<void> => {
    if (cameraPermissionStatus === RESULTS.UNAVAILABLE)
      Alert.alert(Strings.featureUnavailable);
    else if (
      galleryPermisionStatus === RESULTS.DENIED ||
      galleryPermisionStatus === RESULTS.GRANTED
    ) {
      if (galleryPermisionStatus === RESULTS.GRANTED) openDeviceGallery();
      if (galleryPermisionStatus === RESULTS.DENIED) {
        const permissionStatus: PermissionStatus = await requestPermission(
          galleryPermision,
        );
        if (permissionStatus === RESULTS.GRANTED) openDeviceGallery();
      }
    } else {
      Alert.alert(Strings.gallery, Strings.weNeedPermission, [
        {
          text: Strings.cancelBtn,
          onPress: () => { return },
        },
        {
          text: Strings.providePermission,
          onPress: () => openSettings(),
        },
      ]);
    }
  };

  const formik: FormikProps<SignUpSchemaTypes> = useFormik<SignUpSchemaTypes>({
    initialValues: {
      email: Strings.emptyString,
      password: Strings.emptyString,
      firstName: Strings.emptyString,
      lastName: Strings.emptyString,
    },
    validationSchema: signUpSchema,
    onSubmit: (values: SignUpSchemaTypes) => {
      const userCreated = {
        id: users?.length ? users.length + 1 : Math.random(),
        avatar: imagePath,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
      };
      dispatch(addUser(userCreated));
      formik.resetForm();
      setImagePath(Images.defaultImg);
      navigateBack();
    },
  });

  return {
    imagePath,
    modalShown,
    setModalShown,
    handleProfileSelect,
    formik,
    formRefs,
    handleCameraSelect,
    handleGallerySelect,
    theme: (mmkvTheme ?? appearance) as ThemeType
  };
};

export default useCreate;
