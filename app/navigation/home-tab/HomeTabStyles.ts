import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  navigatorStyles: {
    height: verticalScale(65),
    display: 'flex',
    backgroundColor: colors.themeBlueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius:moderateScale(15)
  },

  buttonImg: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderWidth: horizontalScale(2),
    borderRadius: moderateScale(15),
    backgroundColor: colors.themeCyan,
    borderColor: colors.white,
    tintColor: colors.themeBluelight,
    resizeMode: 'contain',
    marginBottom: verticalScale(5),
  },
  buttonImgInactive: {
    backgroundColor: 'white',
    width: moderateScale(30),
    height: moderateScale(30),
    borderWidth: horizontalScale(2),
    borderRadius: moderateScale(15),
    resizeMode: 'contain',
    borderColor: colors.white,
    tintColor: colors.black,
  },

  buttonContainerMain: {
    justifyContent: 'center',
    flex: 1,
    borderRadius:moderateScale (16),
    alignItems: 'center',
  },

  buttonAnimationStyle: {
    position:'relative',
    display: 'flex',
    alignItems: 'center',
  },
  titleTextInActive: {
    display: 'none',
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  titleTextActive: {
    display: 'flex',
    color: colors.themeCyan,
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
});

export default styles;
