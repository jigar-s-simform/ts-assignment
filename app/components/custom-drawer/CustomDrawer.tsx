import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    EnvelopeSimple,
    Gear,
    House,
    SignOut,
    User,
} from 'phosphor-react-native';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { NavigationRoutes, Strings } from '../../constants';
import { authSelector, useAppSelector } from '../../redux';
import { colors, moderateScale } from '../../theme';
import { navigateWithParam, navigateWithReplace } from '../../utils';
import customDrawerStyles from './CustomDrawerStyles';
import useDrawer from './useDrawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { userDetails } = useAppSelector(authSelector);
  const { onPressHandler } = useDrawer();

  const handleLogout = () => {
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
            source={{
              uri: userDetails?.avatar,
            }}
            style={customDrawerStyles.profileImgStyles}
          />
          <View style={customDrawerStyles.nameEmailContainer}>
            <Text style={customDrawerStyles.detailNameText}>
              {userDetails?.first_name +
                Strings.emptyString +
                userDetails?.last_name}
            </Text>
            <View style={customDrawerStyles.emailContainer}>
              <EnvelopeSimple
                size={moderateScale(25)}
                weight="bold"
                color={colors.white}
              />
              <Text style={customDrawerStyles.detailText}>
                {userDetails?.email}
              </Text>
            </View>
          </View>
        </View>
        <DrawerItem
          activeBackgroundColor={colors.themeColor}
          labelStyle={customDrawerStyles.labelStyle}
          icon={() => (
            <House
              size={moderateScale(25)}
              weight="bold"
              color={colors.themeBlueDark}
            />
          )}
          label={Strings.home}
          onPress={() => { navigateWithParam(NavigationRoutes.HomeScreen) }}
        />
        <DrawerItem
          activeTintColor={colors.themeBlue}
          activeBackgroundColor={colors.themeBlueDark}
          labelStyle={customDrawerStyles.labelStyle}
          icon={() => (
            <User size={moderateScale(25)} weight="bold" color={colors.themeBlueDark} />
          )}
          label={Strings.bottomNavigationTitles.profile}
          onPress={() => {
            navigateWithParam(NavigationRoutes.ProfileScreen);
          }}
        />
        <DrawerItem
          activeBackgroundColor={colors.themeColor}
          labelStyle={customDrawerStyles.labelStyle}
          icon={() => (
            <Gear size={moderateScale(25)} weight="bold" color={colors.themeBlueDark} />
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
