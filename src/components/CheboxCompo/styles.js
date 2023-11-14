import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";


export default StyleSheet.create({
    container: {
        width: 155,
        height: 65,
        backgroundColor: Colors.shadow1,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 5,
        padding: 8
        // paddingHorizontal: 15,
    },
    text: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        lineHeight: 22,
    },
    text2: {
        fontSize: Fonts.size.xxxxSmall,
        lineHeight: 22,
    },
})