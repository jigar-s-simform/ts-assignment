import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../assets';
import { CustomHeaderWithoutBack } from '../../components/custom-header-back';
import { NavigationRoutes, Strings } from '../../constants';
import { CreateUserScreen, ProfileScreen, VideoStack } from '../../modules';
import HomeStack from '../HomeStack';
import { HomeTabsParamsList } from '../NavigationTypes';
import TabButton from './HomeTabButton';
import styles from './HomeTabStyles';

const Tabs = createBottomTabNavigator<HomeTabsParamsList>();

const HomeTabs = () => {
  
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: styles.navigatorStyles,
      }}>
      <Tabs.Screen
        options={{
          headerShown:false,
          tabBarButton: props => (
            <TabButton
              {...props}
              image={icons.homeIcon}
              title={Strings.bottomNavigationTitles.home}
            />
          ),
        }}
        name={NavigationRoutes.HomeStack}
        component={HomeStack}
      />
      <Tabs.Screen
        options={{
          header: () => <CustomHeaderWithoutBack title={Strings.screenTitles.create} />,
          tabBarButton: props => (
            <TabButton
              {...props}
              image={icons.createUserIcon}
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
          tabBarButton: props => (
            <TabButton
              {...props}
              image={icons.videosIcon}
              title={Strings.bottomNavigationTitles.videos}
            />
          ),
        }}
        name={NavigationRoutes.VideoStack}
        component={VideoStack}
      />
      <Tabs.Screen
        options={{
          header: () => <CustomHeaderWithoutBack title={Strings.screenTitles.profile} />,
          tabBarButton: props => (
            <TabButton
              {...props}
              image={icons.profileIcon}
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
