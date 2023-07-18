import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { RootMain } from './navigation';
import { persistor, Store } from './redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { get, navigationRef, save } from './utils';
import SplashScreen from 'react-native-splash-screen';
import { useCallback, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Strings } from './constants';
import { ThemeContext, ThemeType } from './context';
import { Provider } from 'react-redux';

const App = (): JSX.Element => {
  const appearance = useColorScheme();
  const { setTheme } = useContext(ThemeContext);

  const setAppTheme = useCallback(async () => {
    const IS_FIRST = await get(Strings.IS_FIRST);
    if (IS_FIRST === null) {
      save(Strings.theme, appearance);
      save(Strings.IsDefault, true);
      save(Strings.IS_FIRST, true);
      if(setTheme) setTheme(appearance as ThemeType);
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
