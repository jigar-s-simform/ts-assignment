import BottomSheet from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useContext, useRef } from 'react';
import { Alert, Linking, useColorScheme } from 'react-native';
import { AsyncUpdateStatus, NavigationRoutes, Strings, ThemeValues } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
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
  save,
  updatePassword,
} from '../../utils';

const useSettings = (
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector(authSelector);
  const sheetRef = useRef<BottomSheet>(null);
  const { setTheme } = useContext(ThemeContext);
  const appearance = useColorScheme();

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

  const handleTurnDarkTheme = async (): Promise<void> => {
    if (setTheme) setTheme(ThemeValues.dark);
    await save(Strings.theme, ThemeValues.dark);
  };

  const handleTurnLightTheme = async (): Promise<void> => {
    if (setTheme) setTheme(ThemeValues.light);
    await save(Strings.theme, ThemeValues.light);
  };

  const handleTurnSystemDefaultTheme = async (): Promise<void> => {
    if (setTheme) setTheme(appearance as ThemeType);
    await save(Strings.theme, appearance);
  };


  return {
    handleOpenUrl,
    handleLogout,
    formik,
    sheetRef,
    handleToggleBottomSheet,
    handleTurnDarkTheme,
    handleTurnLightTheme,
    handleTurnSystemDefaultTheme
  };
};

export default useSettings;
