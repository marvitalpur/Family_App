import { StyleSheet } from "react-native";
import { Colors } from "../../assets/theme";


export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        // Center the content vertically
        // paddingHorizontal: 15, // Add some horizontal padding
    },
    inputs: {
        // flex: 1, // Make the TextInput take up the remaining available width
        backgroundColor: Colors.shadow1,
        borderWidth: 0.5, borderColor: Colors.white,
        height: 50,
        borderRadius: 10,
        padding: 0, // Remove any padding
        color: Colors.white, // Set text color (if needed)
    }


})