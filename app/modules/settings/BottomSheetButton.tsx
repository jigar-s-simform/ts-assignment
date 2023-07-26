import AsyncStorage from '@react-native-async-storage/async-storage';
import { Circle } from 'phosphor-react-native';
import React, { SetStateAction } from 'react';
import { ColorSchemeName, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { StorageConstants, Strings } from '../../constants';
import { ThemeType, UseMmkvReturnType, mmkvStorage } from '../../services';
import { Colors, moderateScale } from '../../theme';
import stylesheet from './SettingsStyles';

interface BottomSheetButtonProps {
  active: string;
  id: string;
  onPress: () => void;
  name: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}

const BottomSheetButton = ({
  active,
  id,
  onPress,
  name,
  setSelected,
}: BottomSheetButtonProps) => {

  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme]: UseMmkvReturnType = useMMKVString(StorageConstants.themeStorageKey, mmkvStorage);

  const theme: ThemeType = (mmkvTheme ?? appearance) as ThemeType;

  const onPressHandler = async (): Promise<void> => {
    onPress();
    await AsyncStorage.setItem(Strings.themeAsyncStorageKey, id);
    setSelected(id);
  };

  const styles = stylesheet(theme);

  return (
    <TouchableOpacity
      style={styles.bottomSheetButton}
      id={id}
      onPress={onPressHandler}>
      <Circle
        size={moderateScale(20)}
        color={Colors[theme].black}
        weight={active === id ? 'fill' : 'regular'}
      />
      <Text style={styles.bottomSheetButtonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default BottomSheetButton;
