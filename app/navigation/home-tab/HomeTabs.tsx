import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationRoutes, Strings } from '../../constants';
import { CreateUserScreen, ProfileScreen, VideosListScreen } from '../../modules';
import HomeStack from '../HomeStack';
import { HomeTabsParamsList } from '../NavigationTypes';
import styles from './HomeTabStyles';
import TabButton from './HomeTabButton';
import { Icons } from '../../assets';
import { FC } from 'react';

const Tabs = createBottomTabNavigator<HomeTabsParamsList>();

const HomeTabs: FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: styles.navigatorStyles,
      }}>
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TabButton
              {...props}
              image={Icons.homeIcon}
              title={Strings.bottomNavigationTitles.home}
            />
          ),
        }}
        name={NavigationRoutes.HomeStack}
        component={HomeStack}
      />
      <Tabs.Screen
        options={{
          tabBarButton: props => (
            <TabButton
              {...props}
              image={Icons.createUserIcon}
              title={Strings.bottomNavigationTitles.create}
            />
          ),
        }}
        name={NavigationRoutes.CreateUserScreen}
        component={CreateUserScreen}
      />
      <Tabs.Screen
        options={{
          tabBarButton: props => (
            <TabButton
              {...props}
              image={Icons.videosIcon}
              title={Strings.bottomNavigationTitles.videos}
            />
          ),
        }}
        name={NavigationRoutes.VideoScreen}
        component={VideosListScreen}
      />
      <Tabs.Screen
        options={{
          tabBarButton: props => (
            <TabButton
              {...props}
              image={Icons.profileIcon}
              title={Strings.bottomNavigationTitles.profile}
            />
          ),
        }}
        name={NavigationRoutes.ProfileScreen}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
