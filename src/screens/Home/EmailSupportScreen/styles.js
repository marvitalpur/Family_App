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
        fontWeight: 'bold'
    },
    textAreaContainer: {
        // borderColor: 'rgba(67, 59, 115, 255)',
        // borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        // marginHorizontal: 15

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