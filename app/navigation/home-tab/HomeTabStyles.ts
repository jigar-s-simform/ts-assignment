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
    display: 'flex',
    backgroundColor: Colors.themeBlueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius:moderateScale(15)
  },
  buttonImg: {
    width: moderateScale(30),
    height: moderateScale(30),
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
    width: moderateScale(30),
    height: moderateScale(30),
    borderWidth: horizontalScale(2),
    borderRadius: moderateScale(15),
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
