import { Alert, Linking } from 'react-native';
import { NavigationRoutes, Strings } from '../../constants';
import { logout, persistor, useAppDispatch } from '../../redux';
import { navigateWithReplace } from '../../utils';

export interface UseSettingsReturnType {
  handleOpenUrl: () => Promise<void>;
  handleLogout: () => void;
}

const useSettings = (): UseSettingsReturnType => {
  const dispatch = useAppDispatch();

  const handleOpenUrl = async (): Promise<void> => {
    try {
      const canOpen: boolean = await Linking.canOpenURL(Strings.googleUrl);
      if (canOpen) Linking.openURL(Strings.googleUrl);
    } catch (e) {
      Alert.alert(Strings.featureUnavailable);
    }
  };

  const handleLogout = (): void => {
    dispatch(logout());
    persistor.purge();
    navigateWithReplace(NavigationRoutes.LoginScreen);
  };

  return {handleOpenUrl, handleLogout};
};

export default useSettings;
