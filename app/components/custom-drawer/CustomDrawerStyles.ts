import { StyleSheet } from 'react-native';
import { ThemeType } from '../../context';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale
} from '../../theme';

const stylesheet = (theme: ThemeType) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors[theme].white,
    justifyContent: 'space-between',
  },
  profileImgStyles: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(1),
  },
  detailsContainer: {
    backgroundColor: Colors[theme].themeBlue,
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    rowGap: verticalScale(20),
  },
  nameEmailContainer: {
    alignItems: 'center',
    rowGap: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
  },
  emailContainer: {
    alignItems: 'center',
    columnGap: horizontalScale(8),
    flexDirection: 'row',
  },
  detailNameText: {
    fontSize: moderateScale(18),
    color: Colors[theme].white,
    fontWeight: '500',
  },
  detailText: {
    fontSize: moderateScale(16),
    color: Colors[theme].white,
    fontWeight: '500',
  },
  imgContainer: {
    backgroundColor: Colors[theme].themeBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(22),
    paddingHorizontal: horizontalScale(10),
    borderBottomWidth: verticalScale(1),
    borderTopWidth: verticalScale(1),
  },
  signOutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: verticalScale(20),
  },
  labelStyle: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    color: Colors[theme].black,
  },
  drawerItemActive: {
    backgroundColor: Colors[theme].themeBlue
  },
  drawerItemInActive: {
    backgroundColor:Colors[theme].white
  }
});

export default stylesheet;
