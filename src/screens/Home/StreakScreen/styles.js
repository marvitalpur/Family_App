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
        paddingHorizontal: 15,
        color: Colors.gary9,
        paddingTop: 10
    },
    text2: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        paddingHorizontal: 15,
        color: Colors.white,
        fontWeight: '600'
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        fontWeight: 'bold'
    },
    lists: {
        // flex: 1,
        marginVertical: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10
    },
    boxView: {
        // flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: Colors.inputbostext,
        paddingHorizontal: 15,
        // justifyContent: 'center',
        // alignItems: 'center'
        // opacity: 0.1,

    }


})