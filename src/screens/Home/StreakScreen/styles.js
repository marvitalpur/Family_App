import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },
    text: {
        paddingHorizontal: 10,
        fontSize: Fonts.size.small,
        color: Colors.text.tertiary,
    },
    textView: {
        paddingTop: 5, flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    box: {
        borderColor: 'rgba(67, 59, 115, 255)',
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.white,
        backgroundColor: 'rgba(67, 59, 115, 255)',
        // height: 150,
        // justifyContent: "flex-start",
        // textAlignVertical: 'top'
    }
})