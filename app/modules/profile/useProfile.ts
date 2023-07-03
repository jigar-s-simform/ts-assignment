import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { authSelector, setProfilePicture, useAppDispatch, useAppSelector } from '../../redux';
import { SignUpSchemaTypes, signUpSchema } from '../../utils';
import { launchImageLibrary } from 'react-native-image-picker';

/**
 * @description custom hook for implementing business logic
 *
 * @returns {Object} containing user details
 */
const useProfile = () => {
  const { userDetails } = useAppSelector(authSelector);
  const dispatch = useAppDispatch()
  const [editable, setEditable] = useState<boolean>(false);

  useEffect(() => {
    formik.setValues({
      email: userDetails?.email ?? '',
      firstName: userDetails?.first_name ?? '',
      lastName: userDetails?.last_name ?? '',
      password: '',
    });
  }, []);

  const handleEditProfile = () => {
    setEditable(true);
  };
  const handleSaveProfile = (values: SignUpSchemaTypes) => {
    setEditable(false);
  };

  const handleEditOrSave = () => {
    if (editable) formik.handleSubmit();
    else handleEditProfile();
  };

  const handleEditProfilePicture = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (response.didCancel) {
    } 
    dispatch(setProfilePicture(response.assets? response.assets[0]?.uri : userDetails?.avatar))
  }

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
    handleEditProfilePicture
  };
};

export default useProfile;
