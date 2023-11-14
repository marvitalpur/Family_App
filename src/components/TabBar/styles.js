import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";

export default StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'rgba(67, 59, 115, 255)',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderColor: Colors.border,

    },

    btntext: {
        fontSize: Fonts.size.xSmall,
        color: Colors.white,

    },
    btntext2: {
        fontSize: Fonts.size.xSmall,
        color: Colors.primary,

    },
    btntext3: {
        fontSize: Fonts.size.xSmall,
        color: Colors.background.primary,
    }


})