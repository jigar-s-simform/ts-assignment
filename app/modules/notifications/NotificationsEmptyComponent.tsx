import React, { FC, useContext } from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
import stylesheet from './NotificationStyles';

const NotificationsEmptyComponent: FC = () => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesheet(theme as ThemeType);

  return (
    <View style={styles.notificationsEmptyContainer}>
      <Text style={styles.notificationEmptyText}>
        {Strings.notificationsEmpty}
      </Text>
    </View>
  );
};

export default NotificationsEmptyComponent;
