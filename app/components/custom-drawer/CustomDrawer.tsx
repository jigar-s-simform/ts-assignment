import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  EnvelopeSimple,
  Gear,
  House,
  User
} from 'phosphor-react-native';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { NavigationRoutes, Strings } from '../../constants';
import { authSelector, useAppSelector } from '../../redux';
import { Colors, moderateScale } from '../../theme';
import { navigateWithParam, navigateWithReplace } from '../../utils';
import customDrawerStyles from './CustomDrawerStyles';

const CustomDrawer = (props: DrawerContentComponentProps): JSX.Element => {
  const { userDetails } = useAppSelector(authSelector);

  const handleLogout = (): void => {
    navigateWithReplace(NavigationRoutes.LoginScreen);
  };

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={customDrawerStyles.mainContainer}
      {...props}>
      <SafeAreaView>
        <View style={customDrawerStyles.detailsContainer}>
          <Image
            source={typeof userDetails?.avatar !== 'number' ? {
              uri: userDetails?.avatar,
            } : userDetails.avatar}
            style={customDrawerStyles.profileImgStyles}
          />
          <View style={customDrawerStyles.nameEmailContainer}>
            <Text style={customDrawerStyles.detailNameText}>
              {`${userDetails?.first_name} ${userDetails?.last_name}`}
            </Text>
            <View style={customDrawerStyles.emailContainer}>
              <EnvelopeSimple
                size={moderateScale(25)}
                weight="bold"
                color={Colors.white}
              />
              <Text style={customDrawerStyles.detailText}>
                {userDetails?.email}
              </Text>
            </View>
          </View>
        </View>
        <DrawerItem
          activeBackgroundColor={Colors.themeColor}
          labelStyle={customDrawerStyles.labelStyle}
          icon={() => (
            <House
              size={moderateScale(25)}
              weight="bold"
              color={Colors.themeBlueDark}
            />
          )}
          label={Strings.home}
          onPress={() => { navigateWithParam(NavigationRoutes.HomeScreen) }}
        />
        <DrawerItem
          activeTintColor={Colors.themeBlue}
          activeBackgroundColor={Colors.themeBlueDark}
          labelStyle={customDrawerStyles.labelStyle}
          icon={() => (
            <User size={moderateScale(25)} weight="bold" color={Colors.themeBlueDark} />
          )}
          label={Strings.bottomNavigationTitles.profile}
          onPress={() => {
            navigateWithParam(NavigationRoutes.ProfileScreen);
          }}
        />
        <DrawerItem
          activeBackgroundColor={Colors.themeColor}
          labelStyle={customDrawerStyles.labelStyle}
          icon={() => (
            <Gear size={moderateScale(25)} weight="bold" color={Colors.themeBlueDark} />
          )}
          label={Strings.settings}
          onPress={() => {
            navigateWithParam(NavigationRoutes.SettingsScreen);
          }}
        />
      </SafeAreaView>
      <View style={customDrawerStyles.signOutContainer}>
        <DrawerItem
          labelStyle={customDrawerStyles.labelStyle}
          label={Strings.appVersion}
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
