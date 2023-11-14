import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";

export default StyleSheet.create({
    container: {
        padding: 10,
        // flex: 1,
        justifyContent: 'center', alignItems: 'center', height: 50,
        // background: Colors.background.primary,
    },
    container2: {
        padding: 10,
        // flex: 1,
        height: 50,
        justifyContent: 'center',

        // background: Colors.background.primary,
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