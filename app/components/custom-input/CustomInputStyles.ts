import { Platform, StyleSheet } from 'react-native';
import { ThemeType } from '../../context';
import {
  Colors,
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const stylesheet = (theme: ThemeType) =>
  StyleSheet.create({
    inputs: {
      fontSize: moderateScale(12),
    },
    textWarning: {
      color: Colors.commonColors.red,
      fontSize: moderateScale(12),
      marginVertical: horizontalScale(2),
      marginHorizontal: horizontalScale(10),
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingVertical:
        Platform.OS === 'android' ? verticalScale(5) : verticalScale(15),
      marginTop: verticalScale(20),
      backgroundColor: Colors[theme]?.white,
      paddingHorizontal: horizontalScale(15),
      borderRadius: moderateScale(8),
      borderWidth: moderateScale(0.7),
      borderColor: colors.grey,
    },
    textInputStyles: {
      color: Colors[theme]?.black,
    },
  });

export default stylesheet;
