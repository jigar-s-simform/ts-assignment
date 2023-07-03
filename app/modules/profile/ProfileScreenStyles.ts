import { StyleSheet } from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
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
    width: moderateScale(120),
    height: moderateScale(120),
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
  editProfileButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(40),
    paddingVertical: moderateScale(10),
    backgroundColor: colors.themeBlueDark,
    borderRadius: moderateScale(10),
    width: 200,
  },
  editProfileText: {
    fontSize: moderateScale(16),
    color: colors.white,
    fontWeight: '500',
  },
  bottomContainer: {
    marginTop: verticalScale(59),
    width: '100%',
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
    paddingHorizontal: horizontalScale(10),
  },
});

export default styles;
