import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stack";


const RootStack = () => {
    return (
        <>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </>
    )
}

export default RootStack;