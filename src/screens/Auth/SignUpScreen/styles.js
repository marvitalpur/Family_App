import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        // background: Colors.background.primary,
    },
    text: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        paddingHorizontal: 15,
        color: Colors.gary9,
        lineHeight: 22,
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,
        paddingVertical: 5
    },
    CameraView: {
        marginTop: 15,
        // backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    camerIcon: {
        width: 80,
        height: 80,
        borderWidth: 1, borderColor: Colors.white,
        padding: 15, borderRadius: 100,
        justifyContent: 'center', alignItems: 'center'
    },
    picturetext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xSmall,
        color: Colors.white
    }


})