/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './app/App';
import {name as appName} from './app.json';
import { ThemeProvider } from './app/context';
import { navigateWithParam } from './app/utils';
import { NavigationRoutes } from './app/constants';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  navigateWithParam(NavigationRoutes.NotificationScreen, { notification: remoteMessage })
});

const AppContainer = () => {
    
  return(
    <ThemeProvider>
        <App />
    </ThemeProvider>
  )
};

AppRegistry.registerComponent(appName, () => AppContainer);
