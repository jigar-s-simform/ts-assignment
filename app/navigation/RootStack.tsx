import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { NavigationRoutes } from '../constants';
import { LoginScreen } from '../modules';
import DashBoardDrawer from './DashboardDrawer';
import { RootStackParamsList } from './NavigationTypes';

// Create a stack navigator using `createNativeStackNavigator` from `@react-navigation/native-stack`
const Stack = createNativeStackNavigator<RootStackParamsList>();

/**
 * RootMain Component
 *
 * @returns {JSX.Element} - The main navigation stack of the app.
 *
 * @description This component represents the main navigation stack of the app.
 * It uses the `createNativeStackNavigator` to create a stack navigator.
 * The stack navigator includes two screens: LoginScreen and DashBoardDrawer.
 * This component returns a JSX element representing the main navigation stack of the app.
 */
const RootMain: FC = (): JSX.Element => {
  
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.DashBoardDrawer}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigationRoutes.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.DashBoardDrawer}
        component={DashBoardDrawer}
      />
    </Stack.Navigator>
  );
};

export default RootMain;
