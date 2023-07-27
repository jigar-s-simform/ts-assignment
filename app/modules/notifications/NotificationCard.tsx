import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NotificationType } from '../../types';
import stylesheet from './NotificationStyles';
import useNotification, { UseNotificationReturnType } from './useNotification';

const NotificationCard = ({
  notification,
}: {
  notification: NotificationType;
  }): JSX.Element => {
  const { handleNotificationDelete, theme }: UseNotificationReturnType = useNotification();
  const styles = stylesheet(theme);

  const handleLongPress = (): void => {
    handleNotificationDelete(notification)
  }

  return (
    <TouchableOpacity
      style={styles.notificationCardContainer}
      onLongPress={handleLongPress}>
      <Text style={styles.notificationTitle}>
        {notification.notification.title}
      </Text>
      <Text style={styles.notificationBody}>
        {notification.notification.body}
      </Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;
