import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { EnvelopeSimple, Gear, House, User } from 'phosphor-react-native';
import { Image, Text, View } from 'react-native';
import { NavigationRoutes, Strings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import stylesheet from './CustomDrawerStyles';
import useDrawer, { UseDrawerReturnType } from './useDrawer';

const CustomDrawer = (props: DrawerContentComponentProps): JSX.Element => {
  const {
    userDetails,
    theme,
    handleOnPress,
    routeSelected,
    imageUrl
  }: UseDrawerReturnType = useDrawer();

  const styles = stylesheet(theme);

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.mainContainer}
      {...props}>
      <View style={styles.detailsContainer}>
        <Image
          source={imageUrl}
          style={styles.profileImgStyles}
        />
        <View style={styles.nameEmailContainer}>
          <Text style={styles.detailNameText}>
            {`${userDetails?.first_name ?? Strings.yourName} ${
              userDetails?.last_name ?? Strings.emptyString
            }`}
          </Text>
          <View style={styles.emailContainer}>
            <EnvelopeSimple
              size={moderateScale(25)}
              weight="bold"
              color={Colors[theme].white}
            />
            <Text style={styles.detailText}>
              {userDetails?.email ?? Strings.yourEmail}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          focused={routeSelected === NavigationRoutes.HomeScreen}
          activeTintColor={Colors[theme].white}
          activeBackgroundColor={Colors[theme].black}
          inactiveTintColor={Colors[theme].white}
          inactiveBackgroundColor={Colors[theme].white}
          labelStyle={
            routeSelected === NavigationRoutes.HomeScreen
              ? styles.labelStyle
              : styles.labelStyleInActive
          }
          icon={() => (
            <House
              size={moderateScale(25)}
              weight="bold"
              color={
                routeSelected === NavigationRoutes.HomeScreen
                  ? Colors[theme].white
                  : Colors[theme].black
              }
            />
          )}
          label={Strings.home}
          onPress={() => {
            handleOnPress(NavigationRoutes.HomeScreen);
          }}
        />
        <DrawerItem
          focused={routeSelected === NavigationRoutes.ProfileScreen}
          activeTintColor={Colors[theme].white}
          activeBackgroundColor={Colors[theme].black}
          inactiveTintColor={Colors[theme].white}
          inactiveBackgroundColor={Colors[theme].white}
          labelStyle={
            routeSelected === NavigationRoutes.ProfileScreen
              ? styles.labelStyle
              : styles.labelStyleInActive
          }
          icon={() => (
            <User
              size={moderateScale(25)}
              weight="bold"
              color={
                routeSelected === NavigationRoutes.ProfileScreen
                  ? Colors[theme].white
                  : Colors[theme].black
              }
            />
          )}
          label={Strings.bottomNavigationTitles.profile}
          onPress={() => {
            handleOnPress(NavigationRoutes.ProfileScreen);
          }}
        />
        <DrawerItem
          focused={routeSelected === NavigationRoutes.SettingsScreen}
          activeTintColor={Colors[theme].white}
          activeBackgroundColor={Colors[theme].black}
          inactiveTintColor={Colors[theme].white}
          inactiveBackgroundColor={Colors[theme].white}
          labelStyle={
            routeSelected === NavigationRoutes.SettingsScreen
              ? styles.labelStyle
              : styles.labelStyleInActive
          }
          icon={() => (
            <Gear
              size={moderateScale(25)}
              weight="bold"
              color={
                routeSelected === NavigationRoutes.SettingsScreen
                  ? Colors[theme].white
                  : Colors[theme].black
              }
            />
          )}
          label={Strings.settings}
          onPress={() => {
            handleOnPress(NavigationRoutes.SettingsScreen);
          }}
        />
      </View>
      <View style={styles.signOutContainer}>
        <DrawerItem
          labelStyle={styles.versionTextStyle}
          label={Strings.appVersion}
          onPress={() => {}} // empty function because it necessary to define onPress prop and we don't want to perform anything
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
