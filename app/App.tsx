import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Strings } from './constants';
import { ThemeContext, ThemeType } from './context';
import { RootMain } from './navigation';
import { Store, persistor } from './redux';
import {
  get,
  navigationRef,
  notificationListener,
  requestUserNotificationPermission,
  save,
} from './utils';

const App = (): JSX.Element => {
  const appearance = useColorScheme();
  const {setTheme} = useContext(ThemeContext);

  const setAppTheme = useCallback(async () => {
    const IS_FIRST = await get(Strings.IS_FIRST);
    if (IS_FIRST === null) {
      save(Strings.theme, appearance);
      save(Strings.IsDefault, true);
      save(Strings.IS_FIRST, true);
      if (setTheme) setTheme(appearance as ThemeType);
    } else {
      const themeFromStorage = await get(Strings.theme);
      if (themeFromStorage === appearance && setTheme)
        setTheme(themeFromStorage as ThemeType);
      else if (setTheme) setTheme(appearance as ThemeType);
    }
  }, []);

  useEffect(() => {
    requestUserNotificationPermission();
    notificationListener();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

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
