import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';
import { Strings } from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
    paddingVertical: verticalScale(20),
  },
  profileImgContainer: {
    position: 'relative',
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
    borderWidth: horizontalScale(2),
    borderColor:Colors.black
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: verticalScale(5),
    padding: moderateScale(4),
    backgroundColor: Colors.blackWithOpacity,
    borderRadius: moderateScale(20),
    borderWidth: horizontalScale(1.5),
    borderColor: Colors.themeBlueDark,
  },
  addUserButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(40),
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.themeBlueDark,
    borderRadius: moderateScale(10),
    width: horizontalScale(200),
  },
  addUserText: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontWeight: '500',
  },
  bottomContainer: {
    flex: 1,
    rowGap:verticalScale(5),
    marginTop: verticalScale(30),
    width: '100%',
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
    paddingHorizontal: horizontalScale(10),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.blackWithOpacity,
    justifyContent:'flex-end'
  },
  closeButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  cancelBtnText: {
    color: Colors.themeBlue,
    fontSize: moderateScale(16),
    fontWeight:'500'
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: moderateScale(40),
    paddingTop: verticalScale(50),
    paddingBottom:verticalScale(5)
  },
  modalBottom: {
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius:moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical:verticalScale(15),
    alignSelf: 'flex-end',
    backgroundColor: Colors.white,
    width:'100%'
  },
  optionItem: {
    alignItems: 'center',
    rowGap:moderateScale(15)
  },
  optionIcon: {
    padding: moderateScale(8),
    borderRadius:moderateScale(30),
    borderWidth:moderateScale(0.5)
  },
  profileSelectionModalText: {
    fontSize: moderateScale(15),
    fontWeight:'500'
  }
});
export default styles;
