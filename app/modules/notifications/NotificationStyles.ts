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
    mainContainer: {
      flex: 1,
      backgroundColor: Colors[theme]?.white,
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(15),
    },
    notificationCardContainer: {
      width: '100%',
      backgroundColor: Colors[theme]?.white,
      justifyContent: 'center',
      paddingHorizontal: horizontalScale(15),
      paddingVertical: verticalScale(20),
      marginVertical: verticalScale(5),
      rowGap: verticalScale(10),
      borderRadius: moderateScale(10),
      borderWidth: 1,
      borderColor: Colors[theme]?.themeBlueDark,
    },
    notificationTitle: {
      fontSize: moderateScale(18),
      fontWeight: '500',
      color: Colors[theme]?.themeBlueDark,
    },
    notificationBody: {
      fontSize: moderateScale(14),
      fontWeight: '500',
      color: Colors[theme]?.black,
    },
    notificationsEmptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    notificationEmptyText: {
      color: Colors[theme]?.black,
      fontSize: moderateScale(18),
      fontWeight: '500',
    },
  });

export default stylesheet;
