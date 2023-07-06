import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';

const loaderStyles = StyleSheet.create({
  wrapper: {
    paddingVertical: verticalScale(1),
    alignItems: 'center',
  },
});

export default loaderStyles;
