import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useContext, useEffect } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Strings } from './constants';
import { ThemeContext, ThemeType, ThemeValueInterface } from './context';
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
  const appearance: ColorSchemeName = useColorScheme();
  const { setTheme }: ThemeValueInterface =
    useContext<ThemeValueInterface>(ThemeContext);

  const setAppTheme = useCallback(async () => {
    const IS_FIRST: string | null = await get(Strings.IS_FIRST);
    if (!IS_FIRST) {
      save(Strings.theme, appearance);
      save(Strings.IsDefault, true);
      save(Strings.IS_FIRST, true);
      if (setTheme) setTheme(appearance as ThemeType);
    } else {
      const themeFromStorage = await get(Strings.theme);
      if (themeFromStorage && setTheme) setTheme(themeFromStorage as ThemeType);
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
