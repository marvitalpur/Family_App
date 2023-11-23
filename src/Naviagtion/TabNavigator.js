import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import PurposeScreen from '../screens/Home/PurposeScreen';
import Affirmations from '../screens/Home/Affirmations';
import TeamScreen from '../screens/Home/TeamScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import StreakScreen from '../screens/Home/StreakScreen';
import { Colors } from '../assets/theme';
import { BottomIcon2W, BottomIcon2, BottomIcon5, BottomIcon5W, BottomIcon4, BottomIcon4W, BottomIcon3, BottomIcon3W, BottomIcon1, BottomIcon1W } from '../assets/theme/svgimages';
const Tab = createBottomTabNavigator();
const MyTabs = props => {
    return (
        <Tab.Navigator
            initialRouteName="Homes"
            screenOptions={{
                headerShown: false,
                headerLeft: () => <></>,
                unmountOnBlur: true,
                // lazy: true,
                tabBarActiveTintColor: Colors.text.secondary,
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    backgroundColor: Colors.shadow1,

                },
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (<BottomIcon1 />) :
                        (<BottomIcon1W />),
                }}
            />

            <Tab.Screen
                name="PurposeScreen"
                component={PurposeScreen}

                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (<BottomIcon2 />) :
                        (<BottomIcon2W />),
                }}
            />
            <Tab.Screen
                name="Affirmations"
                component={Affirmations}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (<BottomIcon3 />) :
                        (<BottomIcon3W />),
                }}
            />
            <Tab.Screen
                name="TeamScreen"
                component={TeamScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (<BottomIcon4 />) :
                        (<BottomIcon4W />),
                }}
            />
            <Tab.Screen
                name="StreakScreen"
                component={StreakScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (<BottomIcon5 />) :
                        (<BottomIcon5W />),
                }}
            />
        </Tab.Navigator>
    );
};



export default MyTabs;
