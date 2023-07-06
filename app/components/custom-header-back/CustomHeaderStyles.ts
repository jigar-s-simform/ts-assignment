import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(8),
    shadowColor: colors.black,
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
export default styles;
