import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationRoutes } from '../../constants';
import { useInitializationRef } from '../../hooks';
import { AppDispatch, RootState } from '../../redux/Store';
import { clearError } from '../../redux/auth/AuthSlice';
import { loginThunk } from '../../services';
import { LoginSchemaTypes, loginSchema, navigateWithParam } from '../../utils';

/**
 * useLogin Hook
 *
 * @description This hook provides the login functionality and handles the login process.
 *
 * @returns {Object} An object containing the formik object, loginStatus, formRefs, and navigation.
 */
const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const {loginSuccess, error} = useSelector((state: RootState) => state.auth);
  const formRefs = useInitializationRef(2);

  useEffect(() => {
    if (loginSuccess) {
      navigateWithParam(NavigationRoutes.DashBoardDrawer);
    }
    if (error) {
      Alert.alert(error);
      dispatch(clearError());
    }
  }, [loginSuccess, error]);

  const formik = useFormik<LoginSchemaTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: function (values: LoginSchemaTypes) {
      // to be completed in next pull request with redux and navigation
      dispatch(loginThunk(values));
    },
  });

  return {
    isLoading,
    setIsLoading,
    formRefs,
    formik,
  };
};

export default useLogin;
