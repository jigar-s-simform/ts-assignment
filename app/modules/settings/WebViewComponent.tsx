import { FC, useContext } from 'react';
import { WebView } from 'react-native-webview';
import { Strings } from '../../constants';
import { ThemeContext } from '../../context';
import stylesheet from './SettingsStyles';

const WebViewComponent: FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = stylesheet(theme);

    return (
        <WebView
            source={{ uri: Strings.googleUrl }}
            style={styles.webViewContainerStyles}
        />
    );
};

export default WebViewComponent;
