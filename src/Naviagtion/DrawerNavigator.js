import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MyProfile from '../screens/Home/MyProfile';
import HomeScreen from '../screens/Home/HomeScreen';
import { Colors } from "../assets/theme";
import CustomDrawerContent from '../components/CustomDrawerContent';
import MyJournals from '../screens/Home/MyJournals';
import ForgetPAssword from '../screens/Auth/ForgetPAssword';
import EmailSupportScreen from '../screens/Home/EmailSupportScreen';
import How_It_Works from '../screens/Home/HowItWorksScreen';
import HelpScreen from '../screens/Home/HelpScreen';
import MyTabs from './TabNavigator';
// import MyTabs from '../components/TabBar';
const MyDrawer = (props) => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { backgroundColor: 'transparent', },
            }}
            headerShown={{}}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
            <Drawer.Screen name="My Profile" component={MyProfile} options={{ headerShown: false }} />
            <Drawer.Screen name="My Journals" component={MyJournals} options={{ headerShown: false }} />
            <Drawer.Screen name="Reset Password" component={ForgetPAssword} options={{ headerShown: false }} />
            <Drawer.Screen name="Email Support" component={EmailSupportScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="How It Works?" component={How_It_Works} options={{ headerShown: false }} />
            <Drawer.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>

    );
}

export default MyDrawer