import {
  GestureResponderEvent,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { images } from '../../assets';
import { CustomInput, CustomLoader, LoaderSizeType } from '../../components';
import { strings } from '../../constants';
import { colors, globalMetrics, verticalScale } from '../../theme';
import { handleSubmitEdit } from '../../utils';
import styles from './LoginStyles';
import useLogin from './useLogin';

/**
 * LoginScreen Component
 *
 * @description This component represents the login screen of the app.
 *
 * @returns {JSX.Element} The rendered LoginScreen component.
 */
const LoginScreen = (): JSX.Element => {
  const {formRefs, formik, isLoading} = useLogin();

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
          <CustomInput
            onBlur={formik.handleBlur(strings.formInputNames.email)}
            ref={ref => (formRefs.current[0] = ref)}
            name={strings.formInputNames.email}
            onChangeText={formik.handleChange(strings.formInputNames.email)}
            onSubmitEditing={() => handleSubmitEdit(formRefs, 0)}
            returnKeyType="next"
            defaultValue={formik.values.email}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <CustomInput
            onBlur={formik.handleBlur(strings.formInputNames.password)}
            name={strings.formInputNames.password}
            ref={ref => (formRefs.current[1] = ref)}
            onChangeText={formik.handleChange(strings.formInputNames.password)}
            onSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
            returnKeyType="done"
            touched={formik.touched.password}
            error={formik.errors.password}
            defaultValue={formik.values.password}
          />
          <TouchableOpacity style={styles.loginBtn}
           onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}
          >
            {isLoading ? (
              <CustomLoader
                animating={isLoading}
                size={LoaderSizeType.small}
                color={colors.white}
              />
            ) : (
              <Text style={styles.loginBtnTxt}>{strings.loginBtnText}</Text>
            )}
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
