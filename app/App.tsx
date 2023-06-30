import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { RootMain } from './navigation';
import store from './redux/Store';
import { navigationRef } from './utils';
import { Provider } from 'react-redux';

const App: FC = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootMain />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
