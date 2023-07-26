import { FormikProps, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Alert, ColorSchemeName, useColorScheme } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { MediaTypes, StorageConstants, Strings } from '../../constants';
import {
  authSelector,
  saveProfileChanges,
  setProfilePicture,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { ThemeType, UserSchemaType, mmkvStorage } from '../../services';
import { SignUpSchemaTypes, signUpSchema } from '../../utils';
import { useMMKVString } from 'react-native-mmkv';
import { Images } from '../../assets';

/**
 * @description custom̦ hook for implementing business logic
 *
 * @returns {Object} containing user details
 *
 */
export interface UseProfileReturnType {
  userDetails: UserSchemaType | undefined
  formik: FormikProps<SignUpSchemaTypes>
  editable: boolean,
  handleEditOrSave : () => void,
  handleEditProfilePicture: () => Promise<void>
  theme: ThemeType,
  imageUrl: number | { uri: string }
}

const useProfile = (): UseProfileReturnType => {
  const { userDetails } = useAppSelector(authSelector);

  let picturePath = userDetails?.avatar;
  
  let imageUrl: number | {uri: string} = Images.defaultImg;
  if (userDetails && typeof userDetails.avatar === 'string')
    imageUrl = { uri: userDetails.avatar };

  const dispatch = useAppDispatch()
  const [editable, setEditable] = useState<boolean>(false);
  const [mmkvTheme] = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );
  const appearance: ColorSchemeName = useColorScheme();

  //useEffect loads form with user data
  useEffect(() => {
    formik.setValues({
      email: userDetails?.email ?? '',
      firstName: userDetails?.first_name ?? '',
      lastName: userDetails?.last_name ?? '',
      password: userDetails?.password ?? '',
    });
  }, []);

  const handleEditProfile = (): void => {
    setEditable(true);
  };

  // performs saving changes logic to redux and shows alert after performing changes
  const handleSaveProfile = (values: SignUpSchemaTypes) => {
    setEditable(false);
    dispatch(
      saveProfileChanges({
        id: userDetails?.id,
        first_name: values.firstName,
        last_name: values.lastName,
        avatar: picturePath,
        email: values.email,
        password: values.password,
      }),
    );
    Alert.alert(Strings.dataSavedSuccessfully);
  };

  const handleEditOrSave = (): void => {
    if (editable) formik.handleSubmit();
    else handleEditProfile();
  };

  const handleEditProfilePicture = async (): Promise<void> => {
    if (editable) {
      const response = await launchImageLibrary({mediaType: MediaTypes.photo});
      if (response.didCancel) return;
      picturePath = response.assets
        ? response.assets[0]?.uri
        : userDetails?.avatar;
      dispatch(setProfilePicture(picturePath));
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
    onSubmit(values: SignUpSchemaTypes) {
      if (editable) handleSaveProfile(values);
      else {
        handleEditProfile();
      }
    },
  });

  return {
    formik,
    userDetails,
    editable,
    handleEditOrSave,
    handleEditProfilePicture,
    theme: (mmkvTheme ?? appearance) as ThemeType,
    imageUrl
  };
};

export default useProfile;
