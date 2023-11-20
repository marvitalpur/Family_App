import { Text, View, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { Colors } from '../../../assets/theme';
import Button from '../../../components/Button';
import Header from '../../../components/header';
import Images from '../../../assets/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../../components/TextInput';

const Login = (props) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const handleLogin = () => {
        props.navigation.replace('MyDrawer', { screen: 'MyTabs' })
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode='cover' style={{ flex: 1, }}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <Header header
                        onPress1={() => props.navigation.goBack()}
                        onPress2={() => props.navigation.navigate('SignUpScreen')}
                        color={Colors.white} headtitle="Sign Up" />
                    <View style={{ marginTop: 5 }} />
                    <Text style={styles.headtext}>Login</Text>
                    <View style={{ paddingTop: 20, paddingHorizontal: 15 }} >
                        <Inputs
                            TextInput1
                            // backgroundColor={''}
                            borderRadius={10}
                            placeholder="Email"
                            text={email}
                            setText={setEmail}
                            secureTextEntry={true}
                            formKey="email"
                        />
                        <View style={{ marginTop: 15 }} />
                        <Inputs
                            // TextInput1
                            // backgroundColor={''}
                            borderRadius={10}
                            placeholder="Password"
                            text={password}
                            setText={setPassword}
                            secureTextEntry={true}
                            formKey="password"
                            color={Colors.text.secondary}
                        />
                        <View style={{ marginTop: 15 }} />
                        <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPAssword')} >
                            <Text Text style={styles.text} > Forgot Password ?</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 25 }} />
                        <Button button1 btn1 onPress={handleLogin} title={'Login'}
                            borderRadius={10}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground >
        </SafeAreaView >
    )
}

export default Login

