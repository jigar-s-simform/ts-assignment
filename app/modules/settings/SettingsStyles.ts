import { StyleSheet } from "react-native"
import { colors, horizontalScale, moderateScale, verticalScale } from "../../theme";

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: colors.white,
        paddingHorizontal: horizontalScale(10),
    },
    settingItem: {
        flexDirection: 'row',
        columnGap:horizontalScale(20),
        backgroundColor:colors.white,
        padding: horizontalScale(20),
        marginVertical:verticalScale(8),
        borderRadius:moderateScale(8),
        shadowColor:colors.black,
        shadowOffset: {
            width: moderateScale(5),
            height:moderateScale(2)
        },
        shadowOpacity: 0.25,
        shadowRadius: moderateScale(6),
        elevation:moderateScale(5)
    },
    settingItemText: {
        fontSize: moderateScale(18),
        fontWeight: '700',
        color:colors.black
    }
})

export default styles;