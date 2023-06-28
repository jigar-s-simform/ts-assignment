import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { images } from '../../assets';
import { strings } from '../../constants';
import { verticalScale } from '../../theme';
import { globalMetrics } from '../../theme/Metrics';
import styles from './LoginStyles';

const LoginScreen = () => {
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <Image source={images.loginBanner} style={styles.shopIcon} />
      </View>
      <KeyboardAvoidingView
        style={styles.bottom}
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={verticalScale(10)}>
        <Text style={styles.loginText}>{strings.loginToContinue}</Text>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <TextInput />
          <TextInput />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>{strings.loginBtnText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notAUser}>
            <Text style={styles.notAUserText}>{strings.notAUser}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
