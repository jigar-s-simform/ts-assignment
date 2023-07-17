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
    },
    settingItem: {
      flexDirection: 'row',
      columnGap: horizontalScale(20),
      backgroundColor: Colors[theme]?.white,
      padding: horizontalScale(20),
      marginVertical: verticalScale(8),
      borderRadius: moderateScale(8),
      shadowColor: Colors[theme]?.black,
      shadowOffset: {
        width: moderateScale(5),
        height: moderateScale(2),
      },
      shadowOpacity: 0.25,
      shadowRadius: moderateScale(6),
      elevation: moderateScale(5),
      borderWidth: moderateScale(1),
      borderColor: Colors[theme]?.black,
    },
    settingItemText: {
      fontSize: moderateScale(18),
      fontWeight: '700',
      color: Colors[theme]?.black,
    },
    mainModalContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[theme]?.blackWithOpacity,
      padding: moderateScale(20),
    },
    modalInputButtonContainer: {
      width: '100%',
      paddingHorizontal: moderateScale(15),
      paddingVertical: verticalScale(40),
      backgroundColor: Colors[theme]?.white,
      flexDirection: 'column',
      rowGap: verticalScale(20),
      borderRadius: moderateScale(10),
    },
    editButton: {
      backgroundColor: Colors.commonColors.darkBlue,
      padding: moderateScale(10),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(10),
      marginVertical: verticalScale(15),
    },
    editButtonText: {
      color: Colors[theme]?.white,
      fontSize: moderateScale(16),
      fontWeight: '600',
    },
    editPasswordLabel: {
      fontWeight: '600',
      fontSize: moderateScale(16),
      color: Colors[theme]?.black,
    },
    passwordItemContainer: {
      alignItems: 'flex-start',
      marginVertical: verticalScale(8),
    },
    passwordItemText: {
      fontSize: moderateScale(12),
      fontWeight: '600',
      color: Colors[theme]?.black,
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cancelButtonStyles: {
      backgroundColor: Colors[theme]?.black,
      padding: moderateScale(10),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(10),
      marginVertical: verticalScale(15),
    },
    bottomSheetButtonContainer: {
      backgroundColor: Colors[theme]?.white,
      paddingHorizontal: horizontalScale(15),
      paddingVertical: verticalScale(10),
      width: '100%',
      borderWidth: moderateScale(1),
      borderColor: Colors[theme]?.black,
      borderRadius: moderateScale(15),
    },
    bottomSheetButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: horizontalScale(15),
      columnGap: horizontalScale(20),
      borderRadius: moderateScale(10),
      backgroundColor: Colors[theme]?.white,
      width: '100%',
      paddingVertical: verticalScale(15),
      marginVertical: verticalScale(10),
      borderWidth: moderateScale(1),
      borderColor: Colors[theme]?.black,
    },
    bottomSheetButtonText: {
      color: Colors[theme]?.black,
      fontWeight: '500',
      fontSize: moderateScale(16),
    },
    radioButtonOuterCircle: {
      width: moderateScale(5),
      height: moderateScale(5),
      borderRadius: moderateScale(2.5)
    },
    radioButtonInnerCircleSelected: {
      width: moderateScale(4),
      height: moderateScale(4),
      margin: moderateScale(1),
      backgroundColor: Colors[theme]?.white
    },
    radioButtonInnerCircleNotSelected: {
      width: moderateScale(4),
      height: moderateScale(4),
      margin: moderateScale(1),
      opacity:0
    }
  });

export default stylesheet;
