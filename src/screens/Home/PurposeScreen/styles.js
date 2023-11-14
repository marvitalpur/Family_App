import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.primary,
        paddingHorizontal: 15,
    },
    text: {
        // textAlign: 'center',
        fontSize: Fonts.size.xSmall,
        // lineHeight: 22,

        // paddingHorizontal: 15,
        color: Colors.white,
        // paddingTop: 10
    },
    text2: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.white,
        fontWeight: '600',
        marginVertical: 10
    },
    boxView: {
        backgroundColor: Colors.shadow1, borderRadius: 10, height: 46,
        borderWidth: 0.5, borderColor: Colors.placeHolderColor, flexDirection: 'row',
        alignItems: 'center'
    },
    seealltext: {
        // textAlign: 'center',
        fontSize: Fonts.size.xxxSmall,
        color: Colors.emailcolor,
        fontWeight: '600',
        marginVertical: 10
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,
        // paddingVertical: 10

    },
    placeholdertext:
    {
        fontSize: Fonts.size.xSmall,
        color: Colors.placeHolderColor, padding: 5
    },

    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textbg: {
        // backgroundColor: Colors.blue,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        color: Colors.text.primary,
    },
    btnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor: Colors.shadow1,
        // padding: 5,

        borderRadius: 10
    },
    btntext: {
        padding: 10,
        paddingHorizontal: 15,
        fontSize: Fonts.size.small,
        textAlign: 'center',
        // borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        color: Colors.white,
    },
    selectedText: {
        backgroundColor: Colors.background.primary,
        color: Colors.white,
    },


})