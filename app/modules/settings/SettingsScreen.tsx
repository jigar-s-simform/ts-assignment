import BottomSheet from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Lock,
  Newspaper,
  Palette,
  Password,
  SignOut,
} from 'phosphor-react-native';
import React, {
  FC,
  useEffect,
  useId,
  useMemo,
  useState
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  BottomSheetConstants,
  SnapPointsType,
  Strings,
  bottomsheetInitialIndex,
} from '../../constants';
import { Colors, moderateScale } from '../../theme';
import BottomSheetButton from './BottomSheetButton';
import PasswordModal from './PasswordModal';
import stylesheet from './SettingsStyles';
import useSettings, { UseSettingsReturnType } from './useSettings';

const SettingsScreen: FC = () => {
  const [modalShown, setModalShown] = useState<boolean>(false);
  const buttonIdOne: string = useId();
  const buttonIdTwo: string = useId();
  const buttonIdThree: string = useId();
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const getThemeSelected = async () => {
      try {
        const themeSelectedId = await AsyncStorage.getItem(
          Strings.themeAsyncStorageKey,
        );
        if (themeSelectedId) setSelected(themeSelectedId);
        else setSelected(buttonIdThree)
      } catch (e) {}
    };
    getThemeSelected();
  }, []);

  const snapPoints: SnapPointsType = useMemo<SnapPointsType>(
    () => [BottomSheetConstants.minimum, BottomSheetConstants.maximum],
    [],
  );

  const {
    handleOpenUrl,
    handleLogout,
    sheetRef,
    handleToggleBottomSheet,
    handleTurnDarkTheme,
    handleTurnLightTheme,
    handleTurnSystemDefaultTheme,
    theme
  }: UseSettingsReturnType = useSettings(setModalShown);

  const handleChangePassword = (): void => {
    setModalShown(true);
  };

  const styles = stylesheet(theme);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={handleChangePassword}>
        <Password
          size={moderateScale(25)}
          color={Colors.commonColors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changePassword}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingItem}
        onPress={handleToggleBottomSheet}>
        <Palette
          size={moderateScale(25)}
          color={Colors.commonColors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.changeTheme}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Newspaper
          size={moderateScale(25)}
          color={Colors.commonColors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.termsAndConditions}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleOpenUrl}>
        <Lock
          size={moderateScale(25)}
          color={Colors.commonColors.themeBlue}
          weight="bold"
        />
        <Text style={styles.settingItemText}>{Strings.privacyPolicy}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
        <SignOut
          size={moderateScale(25)}
          color={Colors.commonColors.themeBlue}
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
        index={bottomsheetInitialIndex}
        style={styles.bottomSheetButtonContainer}>
        <BottomSheetButton
          active={selected}
          id={buttonIdOne}
          onPress={handleTurnDarkTheme}
          name={Strings.darkThemeBtnText}
          setSelected={setSelected}
        />
        <BottomSheetButton
          active={selected}
          id={buttonIdTwo}
          onPress={handleTurnLightTheme}
          name={Strings.lightThemeBtnText}
          setSelected={setSelected}
        />
        <BottomSheetButton
          active={selected}
          id={buttonIdThree}
          onPress={handleTurnSystemDefaultTheme}
          name={Strings.systemDefaultThemeBtnText}
          setSelected={setSelected}
        />
      </BottomSheet>
    </View>
  );
};

export default SettingsScreen;
