import React from 'react';
import { FlatList, View } from 'react-native';
import { authSelector, useAppSelector } from '../../redux';
import NotificationCard from './NotificationCard';
import stylesheet from './NotificationStyles';
import NotificationsEmptyComponent from './NotificationsEmptyComponent';
import useNotification, { UseNotificationReturnType } from './useNotification';

const NotificationsScreen = (): JSX.Element => {
  const { theme }: UseNotificationReturnType = useNotification()
  const styles = stylesheet(theme);
  const { notifications } = useAppSelector(authSelector);
 
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationCard notification={item} />}
        keyExtractor={(item) => item.messageId}
        ListEmptyComponent={NotificationsEmptyComponent}
      />
    </View>
  );
};

export default NotificationsScreen;
