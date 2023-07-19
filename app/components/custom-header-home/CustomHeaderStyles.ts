import { StyleSheet } from 'react-native';
import { ThemeType } from '../../context';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const stylesheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors[theme].white,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(15),
      shadowColor: Colors[theme].black,
      shadowOffset: {
        width: 0,
        height: verticalScale(1),
      },
      shadowOpacity: moderateScale(0.4),
      shadowRadius: moderateScale(1.5),
      elevation: 5,
    },
    headerText: {
      color: Colors[theme].black,
      fontSize: moderateScale(16),
      fontWeight: '500',
    },
    notificationContainerDisplayed: {
      backgroundColor: Colors.commonColors.red,
      position: 'absolute',
      top: -verticalScale(2),
      right: -horizontalScale(2),
      padding: moderateScale(6),
      borderRadius: moderateScale(6),
      opacity: 1
    },
    notificationContainerHidden: {
      opacity: 0
    },

  });

export default stylesheet;
