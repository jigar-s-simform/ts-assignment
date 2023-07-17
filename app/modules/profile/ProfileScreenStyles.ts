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
      alignItems: 'center',
      backgroundColor: Colors[theme].white,
    },
    top: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(10),
      paddingVertical: verticalScale(10),
    },
    profileImage: {
      width: moderateScale(120),
      height: moderateScale(120),
      borderRadius: moderateScale(100),
      borderWidth: horizontalScale(2),
      borderColor: Colors[theme].black,
    },
    editIcon: {
      position: 'absolute',
      right: 0,
      bottom: verticalScale(5),
      padding: moderateScale(4),
      backgroundColor: Colors[theme].blackWithOpacity,
      borderRadius: moderateScale(20),
      borderWidth: horizontalScale(1.5),
      borderColor: Colors[theme].themeBlueDark,
    },
    editProfileButton: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: verticalScale(40),
      paddingVertical: moderateScale(10),
      backgroundColor: Colors[theme].themeBlueDark,
      borderRadius: moderateScale(10),
      width: horizontalScale(200),
    },
    editProfileText: {
      fontSize: moderateScale(16),
      color: Colors[theme].white,
      fontWeight: '500',
    },
    bottomContainer: {
      marginTop: verticalScale(40),
      width: '100%',
      borderTopLeftRadius: moderateScale(25),
      borderTopRightRadius: moderateScale(25),
      paddingHorizontal: horizontalScale(10),
    },
  });

export default stylesheet;
