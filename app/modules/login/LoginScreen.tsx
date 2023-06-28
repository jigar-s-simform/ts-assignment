import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { Strings } from '../../constants';
import { globalMetrics, verticalScale } from '../../theme';
import styles from './LoginStyles';

const LoginScreen = () => {
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.top}>
        <Image source={Images.loginBanner} style={styles.shopIcon} />
      </View>
      <KeyboardAvoidingView
        style={styles.bottom}
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={verticalScale(10)}>
        <Text style={styles.loginText}>{Strings.loginToContinue}</Text>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>{Strings.loginBtnText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notAUser}>
            <Text style={styles.notAUserText}>{Strings.notAUser}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
