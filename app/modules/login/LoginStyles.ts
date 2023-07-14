import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.darkBlue,
    flex: 1,
  },
  loginText: {
    marginVertical: verticalScale(15),
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  inputContainer: {
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(2),
    borderColor: Colors.grey,
  },
  inputs: {
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  btnContainer: {
    width: '80%',
    alignItems: 'center',
  },
  loginBtn: {
    marginTop: verticalScale(20),
    width: '100%',
    paddingVertical: verticalScale(15),
    backgroundColor: Colors.themeBlueDark,
    alignItems: 'center',
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(20),
  },
  loginBtnTxt: {
    color: Colors.white,
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  top: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderBottomLeftRadius: moderateScale(70),
    borderBottomRightRadius: moderateScale(70)
  },
  shopIcon: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(110),
  },
  bottom: {
    flex: 1,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius:moderateScale(30),
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(20),
    backgroundColor: Colors.darkBlue,
    rowGap: verticalScale(10),
  },
  notAUser: {
    alignItems: 'center',
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(60),
  },
  notAUserText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.white,
  },
});

export default styles;
