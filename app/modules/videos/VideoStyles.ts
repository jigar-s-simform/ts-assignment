import { Dimensions, StyleSheet } from 'react-native';
import { Strings } from '../../constants';
import {
  colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale
} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(10),
  },
  headerText: {
    fontSize: moderateScale(18),
    color: colors.black,
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
    borderRadius: moderateScale(2),
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
    color: colors.black,
  },
  subtitle: {
    fontSize: moderateScale(12),
    color: colors.black,
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  controlArea: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: colors.white + Strings.opacity,
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
    width: Dimensions.get('window').width,
    height: verticalScale(260),
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
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    paddingBottom: verticalScale(5),
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    rowGap: verticalScale(10),
  },
  videoBottom: {
    flexDirection: 'row',
    paddingBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    columnGap: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderStyles: {
    zIndex: 1,
    width: '100%',
    height: verticalScale(20),
    position: 'absolute',
    bottom: globalMetrics.isIos ? -verticalScale(25) : -verticalScale(10),
  },
  durationContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: horizontalScale(1),
    alignItems: 'center',
  },
  durationText: {
    color: colors.white,
    fontSize: moderateScale(12),
    fontWeight: '700',
  },
  fullScreenVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  tabBarStylesPotrait: {
    height: verticalScale(65),
    display: 'flex',
    backgroundColor: colors.themeBlueDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
  },
  tabBarStylesLandScape: {
    display: 'none',
  },
  videoBottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontalScale(10),
  },
  subscribeBtn: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: colors.black,
  },
  subscribeBtnText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  reactionContainer: {
    paddingTop: verticalScale(12),
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reactionItem: {
    backgroundColor: colors.themeColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(5),
    columnGap: horizontalScale(10),
  },
  commentsConatiner: {
    backgroundColor: colors.themeColor,
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(15),
    rowGap: 10,
  },
  commentTitleText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  commentContentText: {
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  audioContainer: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(10),
  },
});

export default styles;
