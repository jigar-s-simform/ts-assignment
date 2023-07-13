import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeaderHome } from '../components';
import { NavigationRoutes, Strings } from '../constants';
import { DetailsScreen, HomeScreen, NotificationsScreen } from '../modules';
import { HomeStackParamsList } from './NavigationTypes';
import { FC } from 'react';
import { CustomHeaderWithBack } from '../components/custom-header-back';

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack: FC = () => {
    
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        options={{
          header: CustomHeaderHome,
        }}
        name={NavigationRoutes.HomeScreen}
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
         options={{
          header: () => <CustomHeaderWithBack title={Strings.screenTitles.notifications} />,
        }}
        name={NavigationRoutes.NotificationScreen}
        component={NotificationsScreen}
      />
      <HomeStackNavigator.Screen
        options={{
          header: () => <CustomHeaderWithBack title={Strings.userDetails} />
        }}
        name={NavigationRoutes.DetailsScreen}
        component={DetailsScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
