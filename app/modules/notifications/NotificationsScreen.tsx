import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { ThemeContext, ThemeType } from '../../context';
import { authSelector, useAppSelector } from '../../redux';
import NotificationCard from './NotificationCard';
import stylesheet from './NotificationStyles';
import NotificationsEmptyComponent from './NotificationsEmptyComponent';

const NotificationsScreen = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);
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
