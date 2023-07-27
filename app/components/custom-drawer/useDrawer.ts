import { ColorSchemeName, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { Images } from '../../assets';
import { NavigationRoutes, StorageConstants } from '../../constants';
import { ThemeType } from '../../context';
import {
  authSelector,
  homeSelector,
  setRoute,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { UseMmkvReturnType, UserSchemaType, mmkvStorage } from '../../services';
import { navigateWithParam } from '../../utils';

export interface UseDrawerReturnType {
  handleOnPress: (route: NavigationRoutes) => void;
  userDetails: UserSchemaType | undefined;
  routeSelected: NavigationRoutes;
  theme: ThemeType;
  imageUrl: number | { uri: string };
}

const useDrawer = (): UseDrawerReturnType => {
  const { userDetails } = useAppSelector(authSelector);
  const { routeSelected } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme]: UseMmkvReturnType = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );
  const theme: ThemeType = (mmkvTheme ?? appearance) as ThemeType;

  const handleOnPress = (route: NavigationRoutes): void => {
    navigateWithParam(route);
    dispatch(setRoute(route));
  };

  let imageUrl: number | {uri: string} = Images.defaultImg;
  if (userDetails && typeof userDetails.avatar === 'string')
    imageUrl = {uri: userDetails.avatar};

  return {
    userDetails,
    routeSelected,
    theme,
    handleOnPress,
    imageUrl,
  };
};

export default useDrawer;
