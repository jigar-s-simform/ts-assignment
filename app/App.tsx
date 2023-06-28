import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { RootMain } from './navigation';

const App: FC = () => {
  
  return (
    <NavigationContainer>
      <RootMain />
    </NavigationContainer>
  );
};

export default App;
