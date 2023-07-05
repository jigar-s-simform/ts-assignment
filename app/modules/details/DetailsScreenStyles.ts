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
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.black + colors.shade,
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
    borderWidth: horizontalScale(4),
    borderColor: colors.white,
  },
  backgroundImage: {
    width: '100%',
    height: verticalScale(150),
  },
  bottomContainer: {
    flex: 1,
    paddingTop: verticalScale(120),
    paddingHorizontal: horizontalScale(15),
  },
  profileNameContainer: {
    position: 'absolute',
    left: horizontalScale(20),
    bottom: -moderateScale(70),
    display: 'flex',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    columnGap: moderateScale(5),
    paddingTop: verticalScale(5),
  },
  nameText: {
    color: colors.themeBlueDark,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  detailItem: {
    borderWidth: moderateScale(1),
    marginBottom: verticalScale(25),
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(10),
  },
  detailText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});

export default styles;
