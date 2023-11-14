import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.shadow1,
        borderWidth: 1,
        borderColor: Colors.placeHolderColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 18,
        paddingHorizontal: 15,
        borderRadius: 15
    },
    image: {
        width: 40,
        height: 40

    },
    text: {
        textAlign: 'center',
        color: Colors.gary9,
        fontSize: Fonts.size.xxSmall
    },
    name: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.tertiary,
        letterSpacing: 0.9,
        // marginTop: 10,
    },

    email: {
        fontSize: 12,
        color: Colors.text.tertiary,
        opacity: 0.43,
    },
    priceText: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.warning,
        letterSpacing: 0.9,
        // marginTop: 10,
    },


})