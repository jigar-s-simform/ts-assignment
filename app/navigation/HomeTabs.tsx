import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { NavigationRoutes } from '../constants';
import { CreateUserScreen, ProfileScreen, VideosListScreen } from '../modules';
import HomeStack from './HomeStack';
import { HomeTabsParamsList } from './NavigationTypes';

const Tabs = createBottomTabNavigator<HomeTabsParamsList>();

const HomeTabs:FC = () => {
    
  return (
      <Tabs.Navigator screenOptions={{
          headerShown: false
      }}>
      <Tabs.Screen name={NavigationRoutes.HomeStack} component={HomeStack} />
      <Tabs.Screen
        name={NavigationRoutes.CreateUserScreen}
        component={CreateUserScreen}
      />
      <Tabs.Screen
        name={NavigationRoutes.VideoScreen}
        component={VideosListScreen}
      />
      <Tabs.Screen
        name={NavigationRoutes.ProfileScreen}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
