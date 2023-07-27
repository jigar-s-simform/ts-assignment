import {
  ColorSchemeName,
  SafeAreaView,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { StorageConstants } from '../../constants';
import { ThemeType, UseMmkvReturnType, mmkvStorage } from '../../services';
import stylesheet from './CustomHeaderStyles';

interface CustomHeaderTypes {
  title: string;
}

const CustomHeaderWithoutBack = ({ title }: CustomHeaderTypes) => {
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme]: UseMmkvReturnType = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );
  const theme: ThemeType = (mmkvTheme ?? appearance) as ThemeType;
  const styles = stylesheet(theme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContent} />
      <View style={styles.centerContent}>
        <Text style={styles.textStyles}>{title}</Text>
      </View>
      <View style={styles.leftContent} />
    </SafeAreaView>
  );
};

export default CustomHeaderWithoutBack;
