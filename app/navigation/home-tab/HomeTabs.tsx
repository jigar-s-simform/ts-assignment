import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import { Icons } from '../../assets';
import { CustomHeaderWithoutBack } from '../../components/custom-header-back';
import { NavigationRoutes, Strings } from '../../constants';
import { CreateUserScreen, ProfileScreen, VideoStack } from '../../modules';
import { setRoute, useAppDispatch } from '../../redux';
import { navigateWithParam } from '../../utils';
import HomeStack from '../HomeStack';
import { HomeTabsParamsList } from '../NavigationTypes';
import TabButton from './HomeTabButton';
import styles from './HomeTabStyles';

const Tabs = createBottomTabNavigator<HomeTabsParamsList>();

const HomeTabs: FC = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = (route: NavigationRoutes): void => {
    navigateWithParam(route);
    dispatch(setRoute(route));
  };

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
              onPress={() => {
                handleOnPress(NavigationRoutes.HomeScreen);
              }}
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
              onPress={() => {
                handleOnPress(NavigationRoutes.CreateUserScreen);
              }}
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
              onPress={() => {
                handleOnPress(NavigationRoutes.VideoStack);
              }}
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
              onPress={() => {
                handleOnPress(NavigationRoutes.ProfileScreen);
              }}
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
