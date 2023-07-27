import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { FormikProps, useFormik } from 'formik';
import { useRef } from 'react';
import { Alert, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import {
  AsyncUpdateStatus,
  NavigationRoutes,
  StorageConstants,
  Strings,
  ThemeValues,
} from '../../constants';
import { ThemeType, UseMmkvReturnType } from '../../services';
import {
  authSelector,
  logout,
  persistor,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { mmkvStorage } from '../../services';
import {
  PasswordUpdateSchemaTypes,
  navigateWithParam,
  navigateWithReplace,
  passwordUpdateSchema,
  updatePassword,
} from '../../utils';
import { ColorSchemeName } from 'react-native';

export interface UseSettingsReturnType {
  theme: ThemeType
  handleOpenUrl: () => Promise<void>;
  handleLogout: () => void;
  formik: FormikProps<PasswordUpdateSchemaTypes>;
  sheetRef: React.RefObject<BottomSheetMethods>;
  handleToggleBottomSheet: () => void;
  handleTurnDarkTheme: () => void;
  handleTurnLightTheme: () => void;
  handleTurnSystemDefaultTheme: () => void;
}

const useSettings = (
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>,
): UseSettingsReturnType => {
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector(authSelector);
  const sheetRef: React.RefObject<BottomSheetMethods> = useRef<BottomSheet>(null);
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme, setMmkvTheme]: UseMmkvReturnType = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );

  const formik = useFormik<PasswordUpdateSchemaTypes>({
    initialValues: {
      currentPassword: userDetails?.password ?? Strings.emptyString,
      newPassword: Strings.emptyString,
      confirmNewPassword: Strings.emptyString,
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

  const handleTurnDarkTheme = (): void => {
    setMmkvTheme(ThemeValues.dark);
  };

  const handleTurnLightTheme = (): void => {
    setMmkvTheme(ThemeValues.light);
  };

  const handleTurnSystemDefaultTheme = async (): Promise<void> => {
    setMmkvTheme(appearance as ThemeType);
  };

  return {
    handleOpenUrl,
    handleLogout,
    formik,
    sheetRef,
    handleToggleBottomSheet,
    handleTurnDarkTheme,
    handleTurnLightTheme,
    handleTurnSystemDefaultTheme,
    theme: (mmkvTheme ?? appearance) as ThemeType
  };
};

export default useSettings;
