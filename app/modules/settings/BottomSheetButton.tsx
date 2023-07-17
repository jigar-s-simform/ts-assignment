import { Circle } from 'phosphor-react-native';
import React, { SetStateAction, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ThemeValues } from '../../constants';
import { ThemeContext, ThemeType } from '../../context';
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

  const onPressHandler = (): void => {
    onPress();
    setSelected(id);
  };

  const { theme } = useContext(ThemeContext);
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
