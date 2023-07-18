import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ThemeContext, ThemeType } from '../../context';
import { NotificationType } from '../../types';
import stylesheet from './NotificationStyles';
import useNotification from './useNotification';

const NotificationCard = ({
  notification,
}: {
  notification: NotificationType;
}): JSX.Element => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);
  const {handleNotificationDelete} = useNotification();

  return (
    <TouchableOpacity
      style={styles.notificationCardContainer}
      onLongPress={() => handleNotificationDelete(notification)}>
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
