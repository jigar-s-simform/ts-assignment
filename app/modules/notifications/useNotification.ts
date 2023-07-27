import { Alert, ColorSchemeName, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { StorageConstants, Strings } from '../../constants';
import { deleteNotification, useAppDispatch } from '../../redux';
import { ThemeType, UseMmkvReturnType, mmkvStorage } from '../../services';
import { NotificationType } from '../../types';

export interface UseNotificationReturnType {
  handleNotificationDelete: (notification: NotificationType) => void;
  theme: ThemeType;
}

const useNotification = (): UseNotificationReturnType => {
  const dispatch = useAppDispatch();
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme]: UseMmkvReturnType = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );

  const handleNotificationDelete = (notification: NotificationType): void => {
    Alert.alert(Strings.areYouSure, Strings.deleteNotification, [
      {
        text: Strings.yes,
        onPress: () => dispatch(deleteNotification(notification)),
      },
      {
        text: Strings.cancelBtn,
        onPress: () => {},
      },
    ]);
  };

  return {
    handleNotificationDelete,
    theme: (mmkvTheme ?? appearance) as ThemeType,
  };
};

export default useNotification;
