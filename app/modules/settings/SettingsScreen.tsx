import BottomSheet from '@gorhom/bottom-sheet';
import {
  Lock,
  Newspaper,
  Palette,
  Password,
  SignOut,
} from 'phosphor-react-native';
import React, { FC, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  BottomSheetConstants,
  SnapPointsType,
  Strings,
  bottomsheetInitialIndex,
} from '../../constants';
import { Colors, moderateScale } from '../../theme';
import PasswordModal from './PasswordModal';
import styles from './SettingsStyles';
import useSettings, { UseSettingsReturnType } from './useSettings';

const SettingsScreen: FC = () => {
  const [modalShown, setModalShown] = useState<boolean>(false);
  const {
    handleOpenUrl,
    handleLogout,
    sheetRef,
    handleToggleBottomSheet,
  }: UseSettingsReturnType = useSettings(setModalShown);

  const snapPoints: SnapPointsType = useMemo(
    () => [BottomSheetConstants.minimum, BottomSheetConstants.maximum],
    [],
  );

  const handleChangePassword = (): void => {
    setModalShown(true);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={handleChangePassword}>
        <Password
          size={moderateScale(25)}
          color={Colors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changePassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={handleToggleBottomSheet}>
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
      {modalShown && (
        <PasswordModal modalShown={modalShown} setModalShown={setModalShown} />
      )}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={bottomsheetInitialIndex}
        style={styles.bottomSheetButtonContainer}>
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
