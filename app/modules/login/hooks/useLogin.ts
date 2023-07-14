import { FormikProps, useFormik } from 'formik';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationRoutes } from '../../../constants';
import { useInitializationRef } from '../../../hooks';
import { AppDispatch, authSelector, clearError, useAppSelector } from '../../../redux';
import { loginThunk } from '../../../services';
import { LoginSchemaTypes, loginSchema, navigateWithParam } from '../../../utils';

/**
 * useLogin Hook
 *
 * @description This hook provides the login functionality and handles the login process.
 *
 * @returns {Object} An object containing the formik object, loginStatus, formRefs, and navigation.
 */

export interface UseLoginReturnType {
  isLoading: boolean
  formRefs: React.MutableRefObject<any[]>
  formik: FormikProps<LoginSchemaTypes>
}

const useLogin = (): UseLoginReturnType => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginSuccess, error, isLoading } = useAppSelector(authSelector);
  const formRefs: React.MutableRefObject<any[]> = useInitializationRef(2);

  useEffect(() => {
    if (loginSuccess) {
      navigateWithParam(NavigationRoutes.DashBoardDrawer);
    }
    if (error) {
      Alert.alert(error);
      dispatch(clearError());
    }
  }, [loginSuccess, error]);

  const formik: FormikProps<LoginSchemaTypes> = useFormik<LoginSchemaTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: function (values: LoginSchemaTypes) {
      dispatch(loginThunk(values));
    },
  });

  return {
    isLoading,
    formRefs,
    formik,
  };
};

export default useLogin;
