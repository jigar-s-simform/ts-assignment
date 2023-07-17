import { StyleSheet } from 'react-native';
import { ThemeType } from '../../context';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale
} from '../../theme';

const stylesheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors[theme]?.white,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(10),
      shadowColor: Colors[theme]?.black,
      shadowOffset: {
        width: 0,
        height: verticalScale(1),
      },
      shadowOpacity: moderateScale(0.4),
      shadowRadius: moderateScale(1.5),
      elevation: 5,
    },
    textStyles: {
      textAlign: 'center',
      fontSize: moderateScale(16),
      fontWeight: '500',
      paddingVertical: verticalScale(8),
      color: Colors[theme]?.black,
    },
    leftContent: {
      flex: 1,
      paddingLeft: horizontalScale(10),
      paddingVertical: verticalScale(8),
    },
    centerContent: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  
export default stylesheet;
