import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";


export default StyleSheet.create({


    boxView: {
        backgroundColor: Colors.shadow1, borderRadius: 10, height: 46,
        borderWidth: 0.5, borderColor: Colors.placeHolderColor, flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    placeholdertext: {
        paddingLeft: 10,
        color: Colors.text.tertiary,
        fontSize: Fonts.size.xxSmall
    }

})