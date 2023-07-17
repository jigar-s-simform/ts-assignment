import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(10),
  },
  settingItem: {
    flexDirection: 'row',
    columnGap: horizontalScale(20),
    backgroundColor: Colors.white,
    padding: horizontalScale(20),
    marginVertical: verticalScale(8),
    borderRadius: moderateScale(8),
    shadowColor: Colors.black,
    shadowOffset: {
      width: moderateScale(5),
      height: moderateScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(6),
    elevation: moderateScale(5),
  },
  settingItemText: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: Colors.black,
  },
  mainModalContainer: {
    width:'100%',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: Colors.blackWithOpacity,
    padding: moderateScale(20)
  },
  modalInputButtonContainer: {
    width:'100%',
    paddingHorizontal: moderateScale(15),
    paddingVertical:verticalScale(40),
    backgroundColor: Colors.white,
    flexDirection: 'column',
    rowGap: verticalScale(20),
    borderRadius:moderateScale(10)
  },
  editButton: {
    backgroundColor: Colors.darkBlue,
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(15)
  },
  editButtonText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  editPasswordLabel: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    color: Colors.black
  },
  passwordItemContainer: {
    alignItems: 'flex-start',
    marginVertical:verticalScale(8)
  },
  passwordItemText: {
    fontSize: moderateScale(12),
    fontWeight:'600'
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  }, 
  cancelButtonStyles: {
    backgroundColor: Colors.black,
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(15)
  },
  bottomSheetButtonContainer: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    width: '100%',
    borderWidth: moderateScale(1),
    borderColor: Colors.black,
    borderRadius:moderateScale(15)
  },
  bottomSheetButton: {
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical: verticalScale(15),
    marginVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderColor: Colors.black
  }
});

export default styles;
