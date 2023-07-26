import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StorageConstants } from './constants';
import { RootMain } from './navigation';
import { Store, persistor } from './redux';
import { mmkvStorage } from './services';
import {
  navigationRef,
  notificationListener,
  requestUserNotificationPermission
} from './utils';

const App = (): JSX.Element => {
  const appearance: ColorSchemeName = useColorScheme();
  const [theme, setTheme] = useMMKVString(StorageConstants.themeStorageKey, mmkvStorage)

  useEffect(() => {
    requestUserNotificationPermission();
    notificationListener();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if(!theme) setTheme(appearance as string) // if no theme is found set system default theme in storage
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootMain />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
