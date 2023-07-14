import {
  Lock,
  Newspaper,
  Palette,
  Password,
  SignOut,
} from 'phosphor-react-native';
import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import { Colors, moderateScale } from '../../theme';
import styles from './SettingsStyles';
import useSettings, { UseSettingsReturnType } from './useSettings';
import PasswordModal from './PasswordModal';

const SettingsScreen: FC = () => {
  
  const [modalShown, setModalShown] = useState<boolean>(false);
  const { handleOpenUrl, handleLogout }: UseSettingsReturnType = useSettings(setModalShown);

  const handleChangePassword = (): void => {
    setModalShown(true);
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.settingItem} onPress={handleChangePassword}>
        <Password size={moderateScale(25)} color={Colors.themeBlue} weight='bold'/>
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
      {modalShown && <PasswordModal modalShown={modalShown} setModalShown={setModalShown} />}
    </View>
  );
};

export default SettingsScreen;
