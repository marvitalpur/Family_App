import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/Auth/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Auth/Login';
import ForgetPAssword from '../screens/Auth/ForgetPAssword';
import OtpScreen from '../screens/Auth/OtpScreen';
import PlanScreen from '../screens/Home/PlanScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import MyProfile from '../screens/Home/MyProfile';
import PurposeScreen from '../screens/Home/PurposeScreen';
import MyJournals from '../screens/Home/MyJournals';
import How_It_Works from '../screens/Home/HowItWorksScreen';
import WriteGratitude from '../screens/Home/writrGratitude';
import MyDrawer from './DrawerNavigator';


// import { useSelector } from 'react-redux';
// import _axios from '../http/config';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    // const userData = useSelector((state) => state?.user?.user)

    // useEffect(() => {
    //     if (userData) {
    //         _axios.defaults.headers.common['Authorization'] = `Bearer ${userData?.token}`;
    //         return;
    //     }
    // }, [userData])

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTransparent: true,
                animation: 'none',
                animationTypeForReplace: 'pop'
                // animation: 'slide_from_right',
            }}
            // initialRouteName={auth && "MyDrawer"}
            initialRouteName={'OnBoarding'}>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
            <Stack.Screen name="ForgetPAssword" component={ForgetPAssword} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="PlanScreen" component={PlanScreen} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="My Journals" component={MyJournals} />
            <Stack.Screen name="PurposeScreen" component={PurposeScreen} />
            <Stack.Screen name="How_It_Works" component={How_It_Works} />
            <Stack.Screen name="WriteGratitude" component={WriteGratitude} />
        </Stack.Navigator>


    );
};

export default StackNavigator;