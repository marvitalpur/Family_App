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
    const [badEmail, setBadEmail] = useState('')
    const [badPassword, setBadPassword] = useState('')
    const handleLogin = () => {
        const isValid = Validation();
        // if (isValid)
        {
            // login()
            props.navigation.replace('MyDrawer', { screen: 'MyTabs' });
        }
    };
    const Validation = () => {
        let isValid = true;

        if (email.trim() === '') {
            setBadEmail('Please Enter Email');
            isValid = false;
        } else if (
            !email.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            setBadEmail('Please Enter Valid Email');
            isValid = false;
        } else {
            setBadEmail('');
        }
        if (password.trim() === '') {
            setBadPassword('Please Enter Password');
            isValid = false;
        } else if (password.length < 6) {
            setBadPassword('Please Enter at Least 6 Characters');
            isValid = false;
        } else {
            setBadPassword('');
        }

        return isValid;
    };
    const login = () => {
        fetch(BASE_URL + LOGIN_USER, {
            body: {
                emailId: email,
                password: password
            },
            method: "POST"
        }).then(res.json).then(json => {
            console.log("login is user ")
        }).catch(err => {
            console.log(err)
        })
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
                            setText={txt => setEmail(txt)}
                            // secureTextEntry={true}
                            // formKey="email"
                            isValid={badEmail == "" ? true : false}
                        />
                        {badEmail != '' && <Text style={{ color: "red", marginTop: 5 }}>{badEmail}</Text>}
                        <View style={{ marginTop: 15 }} />
                        <Inputs
                            // TextInput1
                            // backgroundColor={''}
                            borderRadius={10}
                            placeholder="Password"
                            text={password}
                            setText={txt => setPassword(txt)}
                            secureTextEntry={true}
                            // formKey="password"
                            color={Colors.text.secondary}
                            iconname="eye"
                            isValid={badPassword == "" ? true : false}
                        />
                        {badPassword != '' && <Text style={{ color: "red", marginTop: 5 }}>{badPassword}</Text>}
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

