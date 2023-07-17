import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { EnvelopeSimple, Gear, House, User } from 'phosphor-react-native';
import { useContext } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { NavigationRoutes, Strings } from '../../constants';
import { ThemeContext } from '../../context';
import { authSelector, useAppSelector } from '../../redux';
import { Colors, moderateScale } from '../../theme';
import { navigateWithParam, navigateWithReplace } from '../../utils';
import stylesheet from './CustomDrawerStyles';

const CustomDrawer = (props: DrawerContentComponentProps): JSX.Element => {
  const { userDetails } = useAppSelector(authSelector);
  const { theme } = useContext(ThemeContext);
  const styles = stylesheet(theme);

  const handleLogout = (): void => {
    navigateWithReplace(NavigationRoutes.LoginScreen);
  };

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.mainContainer}
      {...props}>
      <SafeAreaView>
        <View style={styles.detailsContainer}>
          <Image
            source={
              typeof userDetails?.avatar !== 'number'
                ? {
                    uri: userDetails?.avatar,
                  }
                : userDetails.avatar
            }
            style={styles.profileImgStyles}
          />
          <View style={styles.nameEmailContainer}>
            <Text style={styles.detailNameText}>
              {`${userDetails?.first_name} ${userDetails?.last_name}`}
            </Text>
            <View style={styles.emailContainer}>
              <EnvelopeSimple
                size={moderateScale(25)}
                weight="bold"
                color={Colors[theme]?.white}
              />
              <Text style={styles.detailText}>{userDetails?.email}</Text>
            </View>
          </View>
        </View>
        <DrawerItem
          activeBackgroundColor={Colors[theme]?.themeColor}
          labelStyle={styles.labelStyle}
          icon={() => (
            <House
              size={moderateScale(25)}
              weight="bold"
              color={Colors[theme]?.black}
            />
          )}
          label={Strings.home}
          onPress={() => {
            navigateWithParam(NavigationRoutes.HomeScreen);
          }}
        />
        <DrawerItem
          activeTintColor={Colors[theme]?.themeBlue}
          activeBackgroundColor={Colors[theme]?.themeBlueDark}
          labelStyle={styles.labelStyle}
          icon={() => (
            <User
              size={moderateScale(25)}
              weight="bold"
              color={Colors[theme]?.black}
            />
          )}
          label={Strings.bottomNavigationTitles.profile}
          onPress={() => {
            navigateWithParam(NavigationRoutes.ProfileScreen);
          }}
        />
        <DrawerItem
          activeBackgroundColor={Colors[theme]?.themeColor}
          labelStyle={styles.labelStyle}
          icon={() => (
            <Gear
              size={moderateScale(25)}
              weight="bold"
              color={Colors[theme]?.black}
            />
          )}
          label={Strings.settings}
          onPress={() => {
            navigateWithParam(NavigationRoutes.SettingsScreen);
          }}
        />
      </SafeAreaView>
      <View style={styles.signOutContainer}>
        <DrawerItem
          labelStyle={styles.labelStyle}
          label={Strings.appVersion}
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
