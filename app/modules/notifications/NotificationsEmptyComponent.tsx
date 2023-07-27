import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../constants';
import { ThemeType } from '../../context';
import stylesheet from './NotificationStyles';
import useNotification, { UseNotificationReturnType } from './useNotification';

const NotificationsEmptyComponent: FC = () => {
  const { theme }: UseNotificationReturnType = useNotification();
  const styles = stylesheet(theme);

  return (
    <View style={styles.notificationsEmptyContainer}>
      <Text style={styles.notificationEmptyText}>
        {Strings.notificationsEmpty}
      </Text>
    </View>
  );
};

export default NotificationsEmptyComponent;
