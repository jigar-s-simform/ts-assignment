import { Dimensions, StyleSheet } from 'react-native';
import { ThemeValues } from '../../constants';
import { ThemeType } from '../../context';
import {
  Colors,
  colors,
  globalMetrics,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const stylesheet = (theme: ThemeType) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: Colors[theme]?.white,
      paddingHorizontal: moderateScale(10),
    },
    headerText: {
      fontSize: moderateScale(18),
      color: Colors[theme]?.black,
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
      color: Colors[theme]?.black,
    },
    subtitle: {
      fontSize: moderateScale(12),
      color: Colors[theme]?.black,
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
      backgroundColor: Colors[theme]?.blackWithOpacity,
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
      backgroundColor: Colors[theme]?.black,
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
      backgroundColor: Colors[theme]?.white,
      flexDirection: 'row',
      paddingBottom: verticalScale(10),
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
    VideoPlayerMainContainer: {
      flex: 1,
      backgroundColor: Colors[theme]?.white,
    },
    videoBottomContainer: {
      marginVertical: 10,
      paddingHorizontal: horizontalScale(10),
    },
    tabBarStylesPotrait: {
      height: verticalScale(65),
      display: 'flex',
      backgroundColor: Colors.commonColors.themeBlueDark,
      justifyContent: 'center',
      alignItems: 'center',
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
      backgroundColor: Colors[theme]?.black,
    },
    subscribeBtnText: {
      color: Colors[theme]?.white,
      fontWeight: '500',
      fontSize: moderateScale(14),
    },
    reactionContainer: {
      paddingTop: verticalScale(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalScale(15),
      paddingVertical: verticalScale(5),
    },
    reactionItem: {
      backgroundColor:
        theme === ThemeValues.light
          ? Colors[theme]?.themeColor
          : Colors[theme]?.themeBlueLighter,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(8),
      paddingVertical: verticalScale(5),
      columnGap: horizontalScale(10),
      borderRadius: moderateScale(20),
    },
    reactionItemText: {
      fontSize: moderateScale(14),
      fontWeight: '400',
      color: Colors[theme]?.black,
    },
    commentsConatiner: {
      backgroundColor:
        theme === ThemeValues.light
          ? Colors[theme]?.themeColor
          : Colors[theme]?.themeBlueLighter,
      paddingHorizontal: horizontalScale(18),
      maringVertical: verticalScale(15),
      paddingVertical: verticalScale(15),
      rowGap: 10,
      borderRadius: moderateScale(10),
    },
    commentTitleText: {
      fontSize: moderateScale(16),
      fontWeight: '600',
      color: Colors[theme]?.black,
    },
    commentContentText: {
      fontSize: moderateScale(14),
      fontWeight: '400',
      color: Colors[theme]?.black,
    },
    audioContainer: {
      width: '100%',
      alignItems: 'flex-end',
      position: 'absolute',
      top: verticalScale(10),
      right: horizontalScale(10),
    },
  });

export default stylesheet;
