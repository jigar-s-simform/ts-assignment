import { FC } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { WebView } from 'react-native-webview';
import { StorageConstants, Strings } from '../../constants';
import { ThemeType, UseMmkvReturnType, mmkvStorage } from '../../services';
import stylesheet from './SettingsStyles';

const WebViewComponent: FC = () => {
  const appearance: ColorSchemeName = useColorScheme();
  const [mmkvTheme]: UseMmkvReturnType = useMMKVString(
    StorageConstants.themeStorageKey,
    mmkvStorage,
  );
  const theme: ThemeType = (mmkvTheme ?? appearance) as ThemeType;
  const styles = stylesheet(theme);

  return (
    <WebView
      source={{uri: Strings.googleUrl}}
      style={styles.webViewContainerStyles}
    />
  );
};

export default WebViewComponent;
