import { StyleSheet } from 'react-native';
import {
  Colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const customInputStyles = StyleSheet.create({
  inputs: {
    fontSize: moderateScale(12),
  },
  textWarning: {
    color: Colors.red,
    fontSize: moderateScale(12),
    marginVertical: horizontalScale(2),
    marginHorizontal: horizontalScale(10),
  },
  inputContainer: {
    width: '100%',
    paddingVertical:
     globalMetrics.isAndroid ? verticalScale(0) : verticalScale(15),
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(0.5),
    borderColor: Colors.grey,
  },
});

export default customInputStyles;
