import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";


export default StyleSheet.create({
    container: {
        flex: 1,
        // background: Colors.shadow1,
    },
    mainView: {
        backgroundColor: Colors.shadow1,
        flex: 1,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 30,
        paddingHorizontal: 15,
        // justifyContent: 'center',
        //  alignItems: 'center'
    },
    avtar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.black1,
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
    userView: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        borderRadius: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 10,
        // marginTop: 20
    },
    content: {
        width: 160,
        height: 75,
        borderRadius: 50,
        justifyContent: 'center',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        // elevation: 12,
    },
    textView: {
        paddingHorizontal: 10

    },
    name: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.primary,
        letterSpacing: 0.9,
        // marginTop: 10,
    },
    list: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.tertiary,
        letterSpacing: 0.9,
        paddingHorizontal: 5
        // marginTop: 10,
    },
    email: {
        fontSize: 12,
        color: Colors.tertiary,
        opacity: 0.43,
    }
})