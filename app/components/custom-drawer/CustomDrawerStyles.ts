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
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  profileImgStyles: {
    width: moderateScale(100),
    height:moderateScale(100),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(1),
  },
  detailsContainer: {
    backgroundColor: colors.themeBlue,
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
    color: colors.white,
    fontWeight: '500',
  },
  detailText: {
    fontSize: moderateScale(16),
    color: colors.white,
    fontWeight: '500',
  },
  imgContainer: {
    backgroundColor: colors.themeBlue,
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
    color: colors.black,
  },
  drawerItemActive: {
    backgroundColor: colors.themeBlue
  },
  drawerItemInActive: {
    backgroundColor:colors.white
  }
});

export default styles;
