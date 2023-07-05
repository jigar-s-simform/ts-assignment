import { RouteProp } from "@react-navigation/native";
import { HomeStackParamsList } from "../../navigation/NavigationTypes";
import { NavigationRoutes } from "../../constants";

export type DetailScreenRouteProp = RouteProp<
  HomeStackParamsList,
  NavigationRoutes.DetailsScreen
>;
