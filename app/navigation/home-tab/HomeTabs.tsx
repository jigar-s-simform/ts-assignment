import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import { Icons } from '../../assets';
import { CustomHeaderWithoutBack } from '../../components/custom-header-back';
import { NavigationRoutes, Strings } from '../../constants';
import { CreateUserScreen, ProfileScreen, VideoStack } from '../../modules';
import HomeStack from '../HomeStack';
import { HomeTabsParamsList } from '../NavigationTypes';
import TabButton from './HomeTabButton';
import styles from './HomeTabStyles';

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
          tabBarButton: (props: BottomTabBarButtonProps) => (
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
          header: () => (
            <CustomHeaderWithoutBack title={Strings.screenTitles.create} />
          ),
          tabBarButton: (props: BottomTabBarButtonProps) => (
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
         headerShown: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabButton
              {...props}
              image={Icons.videosIcon}
              title={Strings.bottomNavigationTitles.videos}
            />
          ),
        }}
        name={NavigationRoutes.VideoStack}
        component={VideoStack}
      />
      <Tabs.Screen
        options={{
          header: () => (
            <CustomHeaderWithoutBack title={Strings.screenTitles.profile} />
          ),
          tabBarButton: (props: BottomTabBarButtonProps) => (
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
