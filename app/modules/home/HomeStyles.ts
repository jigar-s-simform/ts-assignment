import { StyleSheet } from 'react-native';
import { colors, globalMetrics, horizontalScale, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(8),
    backgroundColor: colors.white
  },
  searchContainerLeft: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    columnGap: horizontalScale(20),
  },
  searchContainer: {
    backgroundColor:colors.white,
    paddingHorizontal: moderateScale(8),
    paddingVertical: globalMetrics.isIos ? verticalScale(8) : 0,
    marginVertical:verticalScale(10),
    display: 'flex',
    flexDirection: 'row',
    borderRadius:moderateScale(8),
    borderWidth:moderateScale(1.2),
    borderColor: colors.themeBlueDark,
    alignItems:'center'
  },
  searchEmptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default styles;
