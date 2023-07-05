import { NavigationRoutes } from '../constants';
import { UserSchemaType } from '../services';

export type RootStackParamsList = {
  [NavigationRoutes.LoginScreen]: undefined;
  [NavigationRoutes.DashBoardDrawer]: undefined;
};

export type DashBoardDrawerParamsList = {
  [NavigationRoutes.HomeTabs]: undefined;
  [NavigationRoutes.ProfileScreen]: undefined;
  [NavigationRoutes.SettingsScreen]: undefined;
};

export type HomeTabsParamsList = {
  [NavigationRoutes.HomeStack]: undefined;
  [NavigationRoutes.CreateUserScreen]: undefined;
  [NavigationRoutes.VideoScreen]: undefined;
  [NavigationRoutes.ProfileScreen]: undefined;
};

export type HomeStackParamsList = {
  [NavigationRoutes.HomeScreen]: undefined;
  [NavigationRoutes.NotificationScreen]: undefined;
  [NavigationRoutes.DetailsScreen]: {user: UserSchemaType};
};
