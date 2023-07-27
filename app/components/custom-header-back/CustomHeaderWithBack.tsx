import { ArrowLeft } from 'phosphor-react-native';
import {
  ColorSchemeName,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { StorageConstants, Strings } from '../../constants';
import { ThemeType } from '../../context';
import { UseMmkvReturnType, mmkvStorage } from '../../services';
import { Colors, moderateScale } from '../../theme';
import { navigateBack } from '../../utils';
import stylesheet from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithBack = ({ title }: CustomHeaderTypes) => {
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme]: UseMmkvReturnType = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );
  const theme: ThemeType = (mmkvTheme ?? appearance) as ThemeType;
  const styles = stylesheet(theme);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.leftContent} onPress={navigateBack}>
        <ArrowLeft
          size={moderateScale(25)}
          weight="fill"
          color={Colors[theme].black}
        />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Text
          numberOfLines={Strings.customHeaderNumberOfLines}
          ellipsizeMode="tail"
          style={styles.textStyles}>
          {title}
        </Text>
      </View>
      <View style={styles.leftContent} />
    </SafeAreaView>
  );
};

export default CustomHeaderWithBack;
