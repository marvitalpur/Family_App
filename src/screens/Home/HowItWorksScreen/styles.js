import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },
    text: {
        paddingHorizontal: 15,
        // textAlign: 'center',
        color: Colors.text.tertiary,
        fontSize: Fonts.size.small
    },
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,
    },



})