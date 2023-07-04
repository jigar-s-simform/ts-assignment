import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootMain } from './navigation';
import { persistor, Store } from './redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { navigationRef } from './utils';

const App = () => {

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
