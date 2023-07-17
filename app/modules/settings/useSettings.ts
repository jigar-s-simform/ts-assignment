import BottomSheet from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useContext, useRef, useState } from 'react';
import { Alert, Linking } from 'react-native';
import { AsyncUpdateStatus, NavigationRoutes, Strings, ThemeValues } from '../../constants';
import { ThemeContext } from '../../context';
import {
  authSelector,
  logout,
  persistor,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {
  PasswordUpdateSchemaTypes,
  navigateWithParam,
  navigateWithReplace,
  passwordUpdateSchema,
  updatePassword,
} from '../../utils';

const useSettings = (
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector(authSelector);
  const sheetRef = useRef<BottomSheet>(null);
  const { setTheme } = useContext(ThemeContext);

  const formik = useFormik<PasswordUpdateSchemaTypes>({
    initialValues: {
      currentPassword: userDetails?.password ?? Strings.emptyString,
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: passwordUpdateSchema,
    onSubmit: async (values: PasswordUpdateSchemaTypes) => {
      if (values.newPassword !== values.confirmNewPassword) {
        Alert.alert(Strings.passwordDidNotMatch);
        return;
      }
      const updateResponse = await updatePassword(
        userDetails,
        values.newPassword,
      );
      if (updateResponse === AsyncUpdateStatus.success) {
        Alert.alert(Strings.dataSavedSuccessfully);
        navigateWithParam(NavigationRoutes.HomeScreen);
        setModalShown(false);
      } else {
        Alert.alert(Strings.pleaseTryAgain);
        setModalShown(false);
      }
    },
  });

  const handleOpenUrl = async (): Promise<void> => {
    try {
      const canOpen = await Linking.canOpenURL(Strings.googleUrl);
      if (canOpen) Linking.openURL(Strings.googleUrl);
    } catch (e) {
      Alert.alert(Strings.featureUnavaible);
    }
  };

  const handleLogout = (): void => {
    dispatch(logout());
    persistor.purge();
    navigateWithReplace(NavigationRoutes.LoginScreen);
  };

  const handleToggleBottomSheet = (): void => {
      sheetRef.current?.expand();
  };

  const handleTurnDarkTheme = (): void => {
    if (setTheme) setTheme(ThemeValues.dark);
  };

  const handleTurnLightTheme = (): void => {
    if (setTheme) setTheme(ThemeValues.light);
  };

  return {
    handleOpenUrl,
    handleLogout,
    formik,
    sheetRef,
    handleToggleBottomSheet,
    handleTurnDarkTheme,
    handleTurnLightTheme,
  };
};

export default useSettings;
