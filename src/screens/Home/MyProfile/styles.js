import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.small
    },
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
        fontWeight: 'bold'
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    imgView: {
        width: 100,
        height: 80,
        borderColor: Colors.primary,
        borderRadius: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    }



})