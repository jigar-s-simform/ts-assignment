import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  navigatorStyles: {
    height: verticalScale(65),
    position: 'absolute',
    bottom: verticalScale(10),
    left: horizontalScale(16),
    right: horizontalScale(16),
    borderRadius: moderateScale(40),
    display: 'flex',
    backgroundColor: Colors.themeBlueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: horizontalScale(2),
    borderColor: Colors.white,
  },
  buttonImg: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderWidth: horizontalScale(2),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.themeCyan,
    borderColor: Colors.white,
    tintColor: Colors.themeBluelight,
    resizeMode: 'contain',
    marginBottom: verticalScale(5),
  },
  buttonImgInactive: {
    backgroundColor: 'white',
    width: moderateScale(35),
    height: moderateScale(35),
    borderWidth: horizontalScale(2),
    borderRadius: moderateScale(17.5),
    resizeMode: 'contain',
    borderColor: Colors.white,
    tintColor: Colors.black,
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
    color: Colors.themeCyan,
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
});

export default styles;
