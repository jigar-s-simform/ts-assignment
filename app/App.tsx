import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useContext, useEffect } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Strings } from './constants';
import { ThemeContext, ThemeType } from './context';
import { RootMain } from './navigation';
import { persistor, Store } from './redux';
import { get, navigationRef, save } from './utils';

const App = (): JSX.Element => {
  const appearance: ColorSchemeName = useColorScheme();
  const { setTheme } = useContext(ThemeContext);

  const setAppTheme = useCallback(async () => {
    const IS_FIRST: string | null = await get(Strings.IS_FIRST);
    if (!IS_FIRST) {
      save(Strings.theme, appearance);
      save(Strings.IsDefault, true);
      save(Strings.IS_FIRST, true);
      if(setTheme) setTheme(appearance as ThemeType);
    }
    else {
      const themeFromStorage: string | null = await get(Strings.theme);
      if (themeFromStorage === appearance && setTheme) setTheme(themeFromStorage as ThemeType); // typecasting as themeFromStorage has type string | null
      else 
        if(setTheme) setTheme(appearance as ThemeType);  // typecasting as appearance has type ColorSchemeName 
    }
  }, []);
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
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
