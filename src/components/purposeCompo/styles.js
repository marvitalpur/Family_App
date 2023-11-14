import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";

export default StyleSheet.create({
    container: {
        width: 105,
        height: 105,
        // backgroundColor: Colors.background.secondary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: Colors.shadow1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.5,
        shadowRadius: 1.84,

        elevation: 0,
    },
    text: {
        textAlign: 'center',
        color: Colors.gary9,
        fontSize: Fonts.size.xxSmall
    }



})