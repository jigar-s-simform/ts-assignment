import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../context';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const stylesheet = (theme: ThemeType) =>
  StyleSheet.create({
    card: {
      marginVertical: verticalScale(8),
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: horizontalScale(10),
      paddingHorizontal: horizontalScale(15),
      borderRadius: moderateScale(10),
      paddingVertical: verticalScale(10),
      backgroundColor: Colors[theme]?.themeBlueLighter,
      borderColor: Colors[theme]?.black,
      borderWidth: horizontalScale(0.7),
    },
    profileImg: {
      borderRadius: moderateScale(10),
      width: horizontalScale(80),
      height: verticalScale(90),
    },
    cardRight: {
      rowGap: verticalScale(20),
      marginStart: horizontalScale(5),
    },
    nameContainer: {
      flexDirection: 'row',
      columnGap: horizontalScale(5),
    },
    name: {
      fontWeight: '700',
      color: Colors[theme]?.themeCyan,
      fontSize: moderateScale(20),
    },
    emailContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: horizontalScale(5),
    },
    email: {
      fontSize: moderateScale(14),
      fontWeight: '600',
      color: Colors[theme]?.black,
    },
    deleteBtnStyles: {
      position: 'absolute',
      right: horizontalScale(0),
    },
  });

export default stylesheet;
