import { useContext } from 'react';
import { Images } from '../../assets';
import { NavigationRoutes } from '../../constants';
import { ThemeContext, ThemeType, ThemeValueInterface } from '../../context';
import {
    authSelector,
    homeSelector,
    setRoute,
    useAppDispatch,
    useAppSelector,
} from '../../redux';
import { UserSchemaType } from '../../services';
import { navigateWithParam } from '../../utils';

export interface UseDrawerReturnType {
  handleOnPress: (route: NavigationRoutes) => void;
  userDetails: UserSchemaType | undefined;
  routeSelected: NavigationRoutes;
  theme: ThemeType;
  imageUrl: number | {uri: string};
}

const useDrawer = (): UseDrawerReturnType => {
  const { userDetails } = useAppSelector(authSelector);
  const { routeSelected } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();
  const { theme }: ThemeValueInterface =
    useContext<ThemeValueInterface>(ThemeContext);

  const handleOnPress = (route: NavigationRoutes): void => {
    navigateWithParam(route);
    dispatch(setRoute(route));
  };

  let imageUrl: number | {uri: string} = Images.defaultImg;
  if (userDetails && typeof userDetails.avatar === 'string')
    imageUrl = { uri: userDetails.avatar };

  return {
    userDetails,
    routeSelected,
    theme,
    handleOnPress,
    imageUrl,
  };
};

export default useDrawer;
