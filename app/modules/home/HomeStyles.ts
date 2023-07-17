import { StyleSheet } from 'react-native';
import { ThemeType } from '../../context';
import {
  Colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale
} from '../../theme';

const stylesheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: horizontalScale(8),
      backgroundColor: Colors[theme]?.white,
    },
    searchContainerLeft: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      columnGap: horizontalScale(20),
    },
    searchContainer: {
      backgroundColor: Colors[theme]?.themeBlueLighter,
      paddingHorizontal: moderateScale(8),
      paddingVertical: globalMetrics.isIos ? verticalScale(8) : 0,
      marginVertical: verticalScale(10),
      display: 'flex',
      flexDirection: 'row',
      borderRadius: moderateScale(8),
      borderWidth: moderateScale(1.2),
      borderColor: Colors[theme]?.black,
      alignItems: 'center',
    },
    searchEmptyContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyComponentTextStyles: {
      color: Colors[theme]?.black,
      fontSize: moderateScale(18),
      fontWeight: '500',
    },
  });

export default stylesheet;
