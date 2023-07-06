import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationRoutes, Strings } from '../../constants';
import { CreateUserScreen, ProfileScreen, VideosListScreen } from '../../modules';
import HomeStack from '../HomeStack';
import { HomeTabsParamsList } from '../NavigationTypes';
import styles from './HomeTabStyles';
import TabButton from './HomeTabButton';
import { icons } from '../../assets';
import { CustomHeaderWithoutBack } from '../../components/custom-header-back';

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
          header: () => <CustomHeaderWithoutBack title={Strings.screenTitles.videos} />,
          tabBarButton: props => (
            <TabButton
              {...props}
              image={icons.videosIcon}
              title={Strings.bottomNavigationTitles.videos}
            />
          ),
        }}
        name={NavigationRoutes.VideoScreen}
        component={VideosListScreen}
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
