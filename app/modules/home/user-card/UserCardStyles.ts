import { StyleSheet } from 'react-native';
import {
    colors,
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  card: {
    marginVertical: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
    backgroundColor: colors.themeBluelight,
    borderColor: colors.grey,
    borderWidth: horizontalScale(0.4),
  },
  profileImg: {
    borderRadius: moderateScale(10),
    width: horizontalScale(80),
    height: verticalScale(90),
  },
  cardRight: {
    rowGap: verticalScale(20),
    marginStart: horizontalScale(5),
  },
  nameContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(5),
  },
  name: {
    fontWeight: '700',
    color: colors.themeCyan,
    fontSize: moderateScale(20),
  },
  emailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: horizontalScale(5),
  },
  email: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.white,
  },
  deleteBtnStyles: {
    position: 'absolute',
    right: horizontalScale(0),
  },
});

export default styles;
