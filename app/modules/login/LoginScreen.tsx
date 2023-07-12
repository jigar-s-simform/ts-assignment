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
import { Strings } from '../../constants';
import { colors, globalMetrics } from '../../theme';
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
    <KeyboardAvoidingView style={styles.mainContainer}
    behavior={globalMetrics.isIos ? 'padding' : 'height'}>
      <ScrollView  bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.top}>
        <Image source={images.loginBanner} style={styles.shopIcon} />
      <Text style={styles.loginText}>{Strings.loginToContinue}</Text>
      </View>
      <View style={styles.bottom}>
          <CustomInput
            onBlur={formik.handleBlur(Strings.formInputNames.email)}
            ref={ref => (formRefs.current[0] = ref)}
            name={Strings.formInputNames.email}
            onChangeText={formik.handleChange(Strings.formInputNames.email)}
            onSubmitEditing={() => handleSubmitEdit(formRefs, 0)}
            returnKeyType="next"
            defaultValue={formik.values.email}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <CustomInput
            onBlur={formik.handleBlur(Strings.formInputNames.password)}
            name={Strings.formInputNames.password}
            ref={ref => (formRefs.current[1] = ref)}
            onChangeText={formik.handleChange(Strings.formInputNames.password)}
            onSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
            returnKeyType="done"
            touched={formik.touched.password}
            error={formik.errors.password}
            defaultValue={formik.values.password}
          />
          <TouchableOpacity style={styles.loginBtn}
            disabled={isLoading}
           onPress={formik.handleSubmit as (e?: GestureResponderEvent) => void}
          >
            {isLoading ? (
              <CustomLoader
                animating={isLoading}
                size={LoaderSizeType.small}
                color={colors.white}
              />
            ) : (
              <Text style={styles.loginBtnTxt}>{Strings.loginBtnText}</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.notAUser}>
            <Text style={styles.notAUserText}>{Strings.notAUser}</Text>
          </TouchableOpacity>
      </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
