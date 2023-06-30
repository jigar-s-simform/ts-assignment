import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootMain } from './navigation';
import store from './redux/Store';
import { navigationRef } from './utils';

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootMain />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
