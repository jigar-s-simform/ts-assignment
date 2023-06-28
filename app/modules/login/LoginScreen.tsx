import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { CustomInput, CustomLoader, LoaderSizeType } from '../../components';
import { Strings } from '../../constants';
import { Colors, globalMetrics, verticalScale } from '../../theme';
import { handleSubmitEdit } from '../../utils';
import styles from './LoginStyles';
import { useLogin } from './hooks';
import React from 'react'
/**
 * LoginScreen Component
 *
 * @description This component represents the login screen of the app.
 *
 * @returns {JSX.Element} The rendered LoginScreen component.
 */
const LoginScreen = (): JSX.Element => {
  const { formRefs, formik, isLoading } = useLogin();

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
            ref={ref => (formRefs.current[1] = ref)}
            onBlur={formik.handleBlur(Strings.formInputNames.password)}
            name={Strings.formInputNames.password}
            onSubmitEditing={() => handleSubmitEdit(formRefs, 1)}
            returnKeyType="done"
            touched={formik.touched.password}
            error={formik.errors.password}
            defaultValue={formik.values.password}
          />
          <TouchableOpacity style={styles.loginBtn}>
            {isLoading ? (
              <CustomLoader
                animating={isLoading}
                size={LoaderSizeType.small}
                color={Colors.white}
              />
            ) : (
              <Text style={styles.loginBtnTxt}>{Strings.loginBtnText}</Text>
            )}
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
