import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styles from './SettingsStyles';
import { Lock, Newspaper, Palette, Password, SignOut } from 'phosphor-react-native';
import { colors, moderateScale } from '../../theme';
import { Strings } from '../../constants';
import useSettings from './useSettings';
import PasswordModal from './PasswordModal';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const SettingsScreen = () => {
  
  const [modalShown, setModalShown] = useState<boolean>(false);
  const { handleOpenUrl, handleLogout, sheetRef, handleToggleBottomSheet } = useSettings(setModalShown);
  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
  const handleChangePassword = (): void => {
    setModalShown(true);
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.settingItem} onPress={handleChangePassword}>
        <Password size={moderateScale(25)} color={colors.themeBlue} weight='bold'/>
        <Text style={styles.settingItemText}>{Strings.changePassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleToggleBottomSheet}>
        <Palette size={moderateScale(25)} color={colors.themeBlue} weight='bold'/>
        <Text style={styles.settingItemText}>{Strings.changeTheme}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Newspaper size={moderateScale(25)} color={colors.themeBlue} weight='bold'/>
        <Text style={styles.settingItemText}>{Strings.termsAndConditions}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Lock size={moderateScale(25)} color={colors.themeBlue} weight='bold'/>
        <Text style={styles.settingItemText}>{Strings.privacyPolicy}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
        <SignOut size={moderateScale(25)} color={colors.themeBlue} weight='bold'/>
        <Text style={styles.settingItemText}>{Strings.logout}</Text>
      </TouchableOpacity>
      {modalShown && <PasswordModal modalShown={modalShown} setModalShown={setModalShown} />}
    
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={-1}
        style={styles.bottomSheetButtonContainer}
      >
        <TouchableOpacity style={styles.bottomSheetButton}>
          <Text>{Strings.darkThemeBtnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetButton}>
          <Text>{Strings.lightThemeBtnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetButton}>
          <Text>{Strings.systemDefaultThemeBtnText}</Text>
      </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default SettingsScreen;
