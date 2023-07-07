import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  PERMISSIONS,
  Permission,
  PermissionStatus,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import { Strings } from '../../constants';
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

interface CustomHookProps {
  imagePath: string | undefined;
  setImagePath: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const useCreate = ({imagePath, setImagePath}: CustomHookProps) => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(homeSelector);
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
  const formRefs = useInitializeRefs(4);

  const openDeviceCamera = async () => {
    try {
      const imageCaptureResponse = await launchCamera({
        mediaType: 'photo',
        cameraType: 'back',
      });
      if (!imageCaptureResponse.didCancel) {
        setImagePath(
          imageCaptureResponse.assets
            ? imageCaptureResponse.assets[0]?.uri
            : imagePath,
        );
      } else return;
    } catch (e) {
      setImagePath(Strings.defaultImg);
    }
    setModalShown(false);
  };

  const openDeviceGallery = async () => {
    try {
      const imageSelectionResponse = await launchImageLibrary({
        mediaType: 'photo',
      });
      if (!imageSelectionResponse.didCancel) {
        setImagePath(
          imageSelectionResponse.assets
            ? imageSelectionResponse.assets[0]?.uri
            : imagePath,
        );
      } else return;
    } catch (e) {
      setImagePath(Strings.defaultImg);
    }
    setModalShown(false);
  };

  const handleProfileSelect = () => setModalShown(true);

  const handleCameraSelect = async () => {
    if (cameraPermissionStatus === RESULTS.UNAVAILABLE)
      Alert.alert(Strings.featureUnavaible);
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
          onPress: () => {},
        },
        {
          text: Strings.providePermission,
          onPress: () => openSettings(),
        },
      ]);
    }
  };

  const handleGallerySelect = async () => {
    if (cameraPermissionStatus === RESULTS.UNAVAILABLE)
      Alert.alert(Strings.featureUnavaible);
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
          onPress: () => {},
        },
        {
          text: Strings.providePermission,
          onPress: () => openSettings(),
        },
      ]);
    }
  };

  const formik = useFormik<SignUpSchemaTypes>({
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
      setImagePath(Strings.defaultImg);
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
  };
};

export default useCreate;
