import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";


export default StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        // backgroundColor: Colors.background.primary,
        // background: Colors.background.primary,
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,

    },
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
        fontWeight: 'bold',
        color: Colors.text.tertiary,
    },
    homeHeader: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: Colors.shadow1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 25,
        paddingTop: 15,
        justifyContent: 'space-between'
    },

    iconsRowView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boderView: {
        borderWidth: 0.5,
        borderColor: Colors.border,
        height: 25,
        marginHorizontal: 10

    },
    counttext: {
        paddingHorizontal: 10, color: Colors.text.tertiary,
    },
    img: {
        width: 30, height: 30, borderRadius: 30
    }
})