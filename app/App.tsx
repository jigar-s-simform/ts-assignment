import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootMain } from './navigation';
import { persistor, Store } from './redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { navigationRef } from './utils';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide()
  })

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
