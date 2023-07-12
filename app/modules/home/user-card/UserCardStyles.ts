import { StyleSheet } from 'react-native';
import {
    Colors,
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
    backgroundColor: Colors.white,
    borderColor: Colors.themeBlueDark,
    borderWidth: horizontalScale(0.7),
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
    color: Colors.themeBlueDark,
    fontSize: moderateScale(20),
  },
  emailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: horizontalScale(5),
  },
  email: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: Colors.themeBlueDark,
  },
  deleteBtnStyles: {
    position: 'absolute',
    right: horizontalScale(0),
  },
});

export default styles;
