import { Alert } from 'react-native';
import { Strings } from '../../constants';
import { deleteNotification, useAppDispatch } from '../../redux';
import { NotificationType } from '../../types';

export interface UseNotificationReturnType {
    handleNotificationDelete: (notification: NotificationType) => void
}

const useNotification = (): UseNotificationReturnType => {
  const dispatch = useAppDispatch();

  const handleNotificationDelete = (notification: NotificationType) => {
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
  };
};

export default useNotification;
