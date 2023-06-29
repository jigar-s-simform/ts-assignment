import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationRoutes } from '../constants';
import { DetailsScreen, HomeScreen, NotificationsScreen } from '../modules';
import { HomeStackParamsList } from './NavigationTypes';

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
    
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen
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
