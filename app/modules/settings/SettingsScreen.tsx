import BottomSheet from '@gorhom/bottom-sheet';
import {
  Lock,
  Newspaper,
  Palette,
  Password,
  SignOut,
} from 'phosphor-react-native';
import React, { useContext, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
import { colors, moderateScale } from '../../theme';
import PasswordModal from './PasswordModal';
import stylesheet from './SettingsStyles';
import useSettings from './useSettings';

const SettingsScreen = () => {
  const [modalShown, setModalShown] = useState<boolean>(false);
  const {
    handleOpenUrl,
    handleLogout,
    sheetRef,
    handleToggleBottomSheet,
    handleTurnDarkTheme,
    handleTurnLightTheme,
  } = useSettings(setModalShown);
  const { theme } = useContext(ThemeContext);
  const snapPoints = useMemo(() => ['40%', '90%'], []);
  const handleChangePassword = (): void => {
    setModalShown(true);
  };

  const styles = stylesheet(theme as ThemeType);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={handleChangePassword}>
        <Password
          size={moderateScale(25)}
          color={colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changePassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={handleToggleBottomSheet}>
        <Palette
          size={moderateScale(25)}
          color={colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changeTheme}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Newspaper
          size={moderateScale(25)}
          color={colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.termsAndConditions}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Lock size={moderateScale(25)} color={colors.themeBlue} weight="bold" />
        <Text style={styles.settingItemText}>{Strings.privacyPolicy}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
        <SignOut
          size={moderateScale(25)}
          color={colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.logout}</Text>
      </TouchableOpacity>
      {modalShown && (
        <PasswordModal modalShown={modalShown} setModalShown={setModalShown} />
      )}

      <BottomSheet
        ref={sheetRef}
        enablePanDownToClose
        snapPoints={snapPoints}
        index={-1}
        style={styles.bottomSheetButtonContainer}>
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={handleTurnDarkTheme}>
          <Text style={styles.bottomSheetButtonText}>
            {Strings.darkThemeBtnText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={handleTurnLightTheme}>
          <Text style={styles.bottomSheetButtonText}>
            {Strings.lightThemeBtnText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetButton}>
          <Text style={styles.bottomSheetButtonText}>
            {Strings.systemDefaultThemeBtnText}
          </Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default SettingsScreen;
