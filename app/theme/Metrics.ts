import { Dimensions, Platform, type ScaledSize } from 'react-native';

const {width, height}:ScaledSize = Dimensions.get('window');

const guidelineBaseWidth:number = 375;
const guidelineBaseHeight:number = 812;

// generalized function type for scaling functions
type ScalingFnType = (size:number) => number

const horizontalScale: ScalingFnType = size => (width / guidelineBaseWidth) * size;

const verticalScale: ScalingFnType = size => (height / guidelineBaseHeight) * size;

const moderateScale:ScalingFnType = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

  type GlobalMetricsType = {
    isAndroid: boolean;
    isIos: boolean;
    isPad: boolean;
    isTV: boolean;
  };

  const globalMetrics: GlobalMetricsType = {
    isAndroid: Platform.OS === 'android',
    isIos: Platform.OS === 'ios',
    isPad: Platform.OS === 'ios' && Platform.isPad,
    isTV: Platform.isTV,
  };

export { width, height, globalMetrics, horizontalScale, verticalScale, moderateScale };
