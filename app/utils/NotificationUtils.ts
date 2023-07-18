import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { Strings } from '../constants';

export const requestUserNotificationPermission = async (): Promise<void> => {
  const authStatus: FirebaseMessagingTypes.AuthorizationStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) getFcmToken();
};

const getFcmToken = async (): Promise<void> => {
  const fcmToken: string | null = await AsyncStorage.getItem(Strings.fcmToken);
  if (!fcmToken) {
    try {
      const token: string = await messaging().getToken();
      if (token) await AsyncStorage.setItem(Strings.fcmToken, token);
    } catch (e) {
      if (e instanceof Error) Alert.alert(e.message);
      else Alert.alert(Strings.someThingWentWrong);
    }
  }
};

export const notificationListener = async (): Promise<void> => {
  // this listener listens when the app is in foreground
  messaging().onMessage(async remoteMessage => {
    // to be completed in next pull request
  });

  // this listener listenes when the app is in background
  messaging().onNotificationOpenedApp(remoteMessage => {
    // to be completed in next pull request
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        // to be completed in next pull request
      }
    });
};
