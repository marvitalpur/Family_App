import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home/HomeScreen";
import PlanScreen from "../screens/Home/PlanScreen";
import Affirmations from "../screens/Home/AffirmationsScreen";
import PurposeScreen from "../screens/Home/PurposeScreen";
import TeamScreen from "../screens/Home/TeamScreen";
import StreakScreen from "../screens/Home/StreakScreen";
import MyDrawer from "./Drawer";
import TabBar from "../components/TabBar";
import { Colors } from "../assets/theme";
import MyJournals from "../screens/Home/MyJournals";
const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle:
                    {
                        // flex: 1,
                        // backgroundColor: Colors.shadow2,
                        // height: 60,
                        // flexDirection: 'row',
                        // justifyContent: 'space-evenly',
                        // borderTopWidth: 1,
                        // borderColor: Colors.border,

                    },
                }}
                // initialRouteName='SocialHomeStack'
                tabBarPosition="bottom"
                barStyle={{     // flex: 1,
                    // backgroundColor: Colors.shadow2,
                    // height: 60,
                    // flexDirection: 'row',
                    // justifyContent: 'space-evenly',
                    // borderTopWidth: 1,
                    // borderColor: Colors.border,
                }}
                tabBar={props => <TabBar {...props} />}>
                <Tab.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Affirmations"
                    component={Affirmations}
                    options={{ headerShown: false }} />
                <Tab.Screen
                    name="PurposeScreen"
                    component={PurposeScreen}
                    options={{ headerShown: false }} />
                <Tab.Screen
                    name="TeamScreen"
                    component={TeamScreen}
                    options={{ headerShown: false }} />
                <Tab.Screen
                    name="StreakScreen"
                    component={MyJournals}
                    options={{ headerShown: false }} />
            </Tab.Navigator>

        </>
    )
}

export default MyTabs

