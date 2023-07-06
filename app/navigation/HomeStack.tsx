import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeaderHome } from '../components';
import { NavigationRoutes, Strings } from '../constants';
import { DetailsScreen, HomeScreen, NotificationsScreen } from '../modules';
import { HomeStackParamsList } from './NavigationTypes';

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  
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
        name={NavigationRoutes.NotificationScreen}
        component={NotificationsScreen}
      />
      <HomeStackNavigator.Screen
        name={NavigationRoutes.DetailsScreen}
        component={DetailsScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
