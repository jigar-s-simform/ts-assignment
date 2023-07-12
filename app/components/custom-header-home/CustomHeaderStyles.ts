import { StyleSheet } from 'react-native';
import {
    colors,
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: moderateScale(0.4),
    shadowRadius: moderateScale(1.5),
    elevation: 5,
    },
    headerText: {
        color: colors.black,
        fontSize: moderateScale(16),
        fontWeight:'500'
    }
});

export default styles;
