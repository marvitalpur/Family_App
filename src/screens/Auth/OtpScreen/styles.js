import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.primary,
    },
    text: {
        // textAlign: 'center',
        fontSize: Fonts.size.xSmall,
        lineHeight: 22,
        paddingHorizontal: 15,
        color: Colors.gary9,
    },
    text2: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        paddingHorizontal: 15,
        color: Colors.white,
        fontWeight: '600'
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        fontWeight: 'bold'
    },

    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",

    },

    underlineStyleBase: {
        width: 60,
        height: 80,
        borderWidth: 0,
        borderWidth: 1,
        borderRadius: 30,
        fontSize: Fonts.size.xxLarge
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },


})