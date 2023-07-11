import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import {useInitializationRef} from '../../hooks';
import {LoginSchemaTypes, loginSchema, navigateWithParam} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/Store';
import {loginThunk} from '../../services';
import {NavigationRoutes} from '../../constants';
import {Alert} from 'react-native';
import {clearError} from '../../redux/auth/AuthSlice';

/**
 * useLogin Hook
 *
 * @description This hook provides the login functionality and handles the login process.
 *
 * @returns {Object} An object containing the formik object, loginStatus, formRefs, and navigation.
 */
const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {loginSuccess, error, isLoading} = useSelector((state: RootState) => state.auth);
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
