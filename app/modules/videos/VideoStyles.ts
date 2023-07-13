import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import { Strings } from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:Colors.white,
    paddingHorizontal: moderateScale(10),
  },
  headerText: {
    fontSize: moderateScale(18),
    color: Colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  renderItemMainContainer: {
    marginVertical: verticalScale(10),
    rowGap: verticalScale(10),
    display: 'flex',
  },
  videoThumbNail: {
    width: '100%',
    height: verticalScale(200),
    resizeMode: 'cover',
    borderWidth: moderateScale(1),
  },
  videoPlayerBottomContainer: {
    flexDirection: 'row',
    columnGap: horizontalScale(10),
    alignItems: 'center',
  },
  bottomThumbRound: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(45),
    borderWidth: moderateScale(1),
  },
  titleSubTitleContainer: {
    rowGap: verticalScale(5),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  subtitle: {
    fontSize: moderateScale(12),
  },
  modalContainer: {
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    flex: 1,
  },
  modalVideoContainer: {
    borderColor: Colors.grey,
    borderBottomWidth: verticalScale(1),
    marginVertical: verticalScale(5),
    paddingBottom: verticalScale(2),
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  progressBar: {
    borderWidth: moderateScale(1),
    borderColor: Colors.white,
    width: '90%',
    height: verticalScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.red,
  },
  controlArea: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: Colors.white + Strings.opacity,
  },
  controlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: horizontalScale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: moderateScale(7),
  },
  leftBottomControl: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    columnGap: horizontalScale(20),
  },
  rightBottomControl: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: horizontalScale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
