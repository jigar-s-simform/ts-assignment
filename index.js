/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './app/App';
import {name as appName} from './app.json';
import { ThemeProvider } from './app/context';

const AppContainer = () => {
    
  return(
    <ThemeProvider>
        <App />
    </ThemeProvider>
  )
};

AppRegistry.registerComponent(appName, () => AppContainer);
