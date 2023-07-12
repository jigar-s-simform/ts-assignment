import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { RootMain } from './navigation';
import { persistor, Store } from './redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { navigationRef } from './utils';
import { Provider } from 'react-redux';

const App: FC = () => {
  
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
