import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationRoutes } from '../constants';
import { HomeScreen, SettingsScreen } from '../modules';
import { ProfileScreen } from '../modules/profile';
import { DashBoardDrawerParamsList } from './NavigationTypes';
import { FC } from 'react';

// Create a drawer navigator using `createDrawerNavigator` from `@react-navigation/drawer`
const DasboardDrawer = createDrawerNavigator<DashBoardDrawerParamsList>();

/**
 * DashBoardDrawer Component
 *
 * @returns {JSX.Element} - The dashboard drawer navigation component.
 *
 * @description This component represents the dashboard drawer navigation.
 * It uses the `createDrawerNavigator` function to create a drawer navigator.
 * The drawer navigator includes three screens: HomeScreen, ProfileScreen, and SettingsScreen.
 * This component returns a JSX element representing the dashboard drawer navigation.
 */
const DashBoardDrawer:FC = ():JSX.Element => {
  
  return (
    <DasboardDrawer.Navigator>
      <DasboardDrawer.Screen
        name={NavigationRoutes.HomeTabs}
        component={HomeScreen}
      />
      <DasboardDrawer.Screen
        name={NavigationRoutes.ProfileScreen}
        component={ProfileScreen}
      />
      <DasboardDrawer.Screen
        name={NavigationRoutes.SettingsScreen}
        component={SettingsScreen}
      />
    </DasboardDrawer.Navigator>
  );
};

export default DashBoardDrawer;
