import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Strings } from '../../constants';
import {
  authSelector,
  saveProfileChanges,
  setProfilePicture,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { SignUpSchemaTypes, signUpSchema } from '../../utils';

/**
 * @description custom̦ hook for implementing business logic
 *
 * @returns {Object} containing user details
 *
 */

const useProfile = () => {
  const {userDetails} = useAppSelector(authSelector);
  let picturePath = userDetails?.avatar; // let because we are changing it edit profile
  const dispatch = useAppDispatch();
  const [editable, setEditable] = useState<boolean>(false);

  //useEffect loads form with user data
  useEffect(() => {
    formik.setValues({
      email: userDetails?.email ?? '',
      firstName: userDetails?.first_name ?? '',
      lastName: userDetails?.last_name ?? '',
      password: userDetails?.password ?? '',
    });
  }, []);

  // makes the profile editable
  const handleEditProfile = () => {
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

  const handleEditOrSave = () => {
    if (editable) formik.handleSubmit();
    else handleEditProfile();
  };

  const handleEditProfilePicture = async () => {
    if (editable) {
      const response = await launchImageLibrary({mediaType: 'photo'});
      if (response.didCancel) return;
      picturePath = response.assets
        ? response.assets[0]?.uri
        : userDetails?.avatar;
      dispatch(setProfilePicture(picturePath));
    }
  };

  const formik = useFormik<SignUpSchemaTypes>({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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
  };
};

export default useProfile;
