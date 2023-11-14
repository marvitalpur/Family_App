import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        // background: Colors.background.secondary,
    },
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.tertiary
    },
    headtext: {
        paddingLeft: 15,
        // textAlign: 'center',
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },

})