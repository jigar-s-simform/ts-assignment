import { useFormik } from 'formik';
import { Alert, Linking } from 'react-native';
import {
    AsyncUpdateStatus,
    NavigationRoutes,
    Strings
} from '../../constants';
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
import { useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { shallowEqual } from 'react-redux';

const useSettings = (
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector(authSelector);
  const [bottomSheetShown, setBottomSheetShown] = useState<boolean>(false);
  const sheetRef = useRef<BottomSheet>(null);

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
    if (bottomSheetShown) {
      setBottomSheetShown(false);
      sheetRef.current?.expand()
    }
    else {
      setBottomSheetShown(true);
      sheetRef.current?.close()
    }
  }

  return {handleOpenUrl, handleLogout, formik, sheetRef, handleToggleBottomSheet};
};

export default useSettings;
