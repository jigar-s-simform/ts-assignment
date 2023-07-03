import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
    paddingVertical: verticalScale(20),
  },
  profileImgContainer: {
    position: 'relative',
  },
  profileImage: {
    width: horizontalScale(150),
    height: verticalScale(150),
    borderRadius: moderateScale(100),
    borderWidth: horizontalScale(2),
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: verticalScale(5),
    padding: moderateScale(4),
    backgroundColor: colors.black + colors.shade,
    borderRadius: moderateScale(20),
    borderWidth: horizontalScale(1.5),
    borderColor: colors.themeBlueDark,
  },
});

export default styles;
