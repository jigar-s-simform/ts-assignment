import {
  Lock,
  Newspaper,
  Palette,
  Password,
  SignOut,
} from 'phosphor-react-native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './SettingsStyles';
import useSettings, { UseSettingsReturnType } from './useSettings';

const SettingsScreen: FC = () => {
  const {handleOpenUrl, handleLogout}: UseSettingsReturnType = useSettings();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.settingItem}>
        <Password
          size={moderateScale(25)}
          color={Colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changePassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Palette
          size={moderateScale(25)}
          color={Colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changeTheme}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Newspaper
          size={moderateScale(25)}
          color={Colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.termsAndConditions}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Lock size={moderateScale(25)} color={Colors.themeBlue} weight="bold" />
        <Text style={styles.settingItemText}>{Strings.privacyPolicy}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
        <SignOut
          size={moderateScale(25)}
          color={Colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.logout}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
