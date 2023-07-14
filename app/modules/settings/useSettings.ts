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

const useSettings = (
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const dispatch = useAppDispatch();
  const {userDetails} = useAppSelector(authSelector);

  const formik = useFormik<PasswordUpdateSchemaTypes>({
    initialValues: {
      currentPassword: userDetails?.password ?? Strings.emptyString,
      newPassword: '',
      confirmNewPassword: '',
      },
      validationSchema: passwordUpdateSchema,
    onSubmit: async values => {
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

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    navigateWithReplace(NavigationRoutes.LoginScreen);
  };

  return {handleOpenUrl, handleLogout, formik};
};

export default useSettings;
