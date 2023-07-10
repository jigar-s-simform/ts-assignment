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
    height: verticalScale(250),
    resizeMode: 'cover',
    borderWidth: moderateScale(1),
    borderRadius:moderateScale(2)
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
  video: {
    width: '100%',
    height:verticalScale(260)
  },
  controlsContainer: {
    position: 'absolute',
    width: '100%',
    height: verticalScale(260),
    opacity: 0.5,
    backgroundColor: colors.black,
    justifyContent: 'center',
  },
  centerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
  },
  controlsBottom: {
    position: 'absolute',
    bottom:0,
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-end',
    paddingHorizontal: horizontalScale(10),
    paddingBottom: verticalScale(5)
  },
  videoContainer: {
    rowGap:verticalScale(10)
  },
  videoBottom: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    paddingBottom:verticalScale(10),
    columnGap: horizontalScale(10),
    alignItems: 'center',
    borderBottomWidth:moderateScale(1)
  }
});

export default styles;
