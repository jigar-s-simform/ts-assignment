import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { FormikProps, useFormik } from 'formik';
import { useContext, useRef } from 'react';
import { Alert, useColorScheme } from 'react-native';
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

export interface UseSettingsReturnType {
  handleOpenUrl: () => Promise<void>;
  handleLogout: () => void;
  formik: FormikProps<PasswordUpdateSchemaTypes>;
  sheetRef: React.RefObject<BottomSheetMethods>;
  handleToggleBottomSheet: () => void;
  handleTurnDarkTheme: () => void;
  handleTurnLightTheme: () => void;
  handleTurnSystemDefaultTheme: () => Promise<void>
}

const useSettings = (
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>,
): UseSettingsReturnType => {
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
      const updateResponse: string = await updatePassword(
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
    navigateWithParam(NavigationRoutes.WebView);
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
