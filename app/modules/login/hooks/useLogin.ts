import { FormikProps, useFormik } from 'formik';
import { useEffect } from 'react';
import { Alert, ColorSchemeName, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { useDispatch } from 'react-redux';
import { NavigationRoutes, StorageConstants, Strings } from '../../../constants';
import { useInitializationRef } from '../../../hooks';
import {
  AppDispatch,
  authSelector,
  clearError,
  useAppSelector,
} from '../../../redux';
import { ThemeType, loginThunk, mmkvStorage } from '../../../services';
import { LoginSchemaTypes, loginSchema, navigateWithParam } from '../../../utils';

/**
 * useLogin Hook
 *
 * @description This hook provides the login functionality and handles the login process.
 *
 * @returns {Object} An object containing the formik object, loginStatus, formRefs, and navigation.
 */

export interface UseLoginReturnType {
  isLoading: boolean;
  formRefs: React.MutableRefObject<any[]>;
  formik: FormikProps<LoginSchemaTypes>;
  theme: ThemeType;
}

const useLogin = (): UseLoginReturnType => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginSuccess, error, isLoading } = useAppSelector(authSelector);
  const formRefs: React.MutableRefObject<any[]> = useInitializationRef(2);
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme] = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );

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
      email: Strings.emptyString,
      password: Strings.emptyString,
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
    theme: (mmkvTheme ?? appearance) as ThemeType,
  };
};

export default useLogin;
