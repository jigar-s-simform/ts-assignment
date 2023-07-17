import { BellRinging, List } from 'phosphor-react-native';
import { useContext } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationRoutes, Strings } from '../../constants';
import { ThemeContext } from '../../context';
import { Colors, moderateScale } from '../../theme';
import { navigateWithParam, toggleDrawer } from '../../utils';
import stylesheet from './CustomHeaderStyles';

/**
 * CustomHeader Function
 * @returns {JSX.Element} - The custom header component for navigation.
 *
 * @description This function is used to define a custom header component for navigation. It takes in an object
 * with the following parameters: navigation (the navigation object), options (header options), and route (current route).
 * The function returns a JSX element representing the custom header component.
 */
const CustomHeaderHome = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme);

  const navigateToNotifications = (): void =>
    navigateWithParam(NavigationRoutes.NotificationScreen);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer}>
        <List
          size={moderateScale(25)}
          color={Colors[theme].themeCyan}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>
        {Strings.bottomNavigationTitles.home}
      </Text>
      <TouchableOpacity onPress={navigateToNotifications}>
        <BellRinging
          size={moderateScale(25)}
          color={Colors[theme].themeCyan}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomHeaderHome;
