<<<<<<< HEAD
import { StyleSheet } from 'react-native';
import {
  Colors,
  globalMetrics,
=======
import { Platform, StyleSheet } from 'react-native';
import {
  colors,
>>>>>>> a604e69 (feat: TE7-T1022: Login UI Part-2 complete with validation and Custom Input)
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const customInputStyles = StyleSheet.create({
  inputs: {
    fontSize: moderateScale(12),
  },
  textWarning: {
<<<<<<< HEAD
    color: Colors.red,
=======
    color: colors.red,
>>>>>>> a604e69 (feat: TE7-T1022: Login UI Part-2 complete with validation and Custom Input)
    fontSize: moderateScale(12),
    marginVertical: horizontalScale(2),
    marginHorizontal: horizontalScale(10),
  },
  inputContainer: {
    width: '100%',
    paddingVertical:
<<<<<<< HEAD
     globalMetrics.isAndroid ? verticalScale(0) : verticalScale(15),
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(0.5),
    borderColor: Colors.grey,
=======
      Platform.OS === 'android' ? verticalScale(0) : verticalScale(15),
    marginTop: verticalScale(10),
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(0.5),
    borderColor: colors.grey,
>>>>>>> a604e69 (feat: TE7-T1022: Login UI Part-2 complete with validation and Custom Input)
  },
});

export default customInputStyles;
