import {
    Text, View, SafeAreaView,
    ImageBackground, ScrollView, Image, TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import styles from './styles';
import { Colors, Fonts } from '../../../assets/theme';
import Button from '../../../components/Button';
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import Images from '../../../assets/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from '../../../components/TextInput';

const SignUpScreen = (props) => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Header header
                            onPress1={() => props.navigation.goBack()}
                            onPress2={() => props.navigation.navigate('Login')}
                            color={Colors.white} headtitle="Login" />
                        <View style={{ marginTop: 15 }} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <ProgressBar progress={0.5} color={Colors.background.secondary} />
                        </View>
                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.headtext}>Set up your profile</Text>
                        <Text style={styles.text}>Create an account so you can manage your 4 pillars of the family.</Text>
                        <View style={styles.CameraView}>
                            <TouchableOpacity onPress={() => getAllPhotos()} style={styles.camerIcon}>
                                <Image source={Images.icons.CameraIcon} />
                            </TouchableOpacity>
                            <Text style={styles.picturetext} >Add profile picture</Text>
                        </View>
                        <View style={{ marginTop: 10, padding: 15, }}>
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="First Name"
                                text={fname}
                                setText={setFname}
                                // secureTextEntry={true}
                                formKey="fname"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Last Name"
                                text={lname}
                                setText={setLname}
                                // secureTextEntry={true}
                                formKey="lname"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Email"
                                text={email}
                                setText={setEmail}
                                // secureTextEntry={true}
                                formKey="Email"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                // backgroundColor={}
                                borderRadius={10}
                                placeholder="Date of Birth"
                                text={dob}
                                setText={setDob}
                                secureTextEntry={true}
                                formKey="dob"
                                color={Colors.text.secondary}
                                iconname="calendar"
                            />
                            <View style={{ marginTop: 10 }} />
                            <Inputs
                                // backgroundColor={}
                                borderRadius={10}
                                placeholder="Password"
                                text={password}
                                setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                                color={Colors.text.secondary}
                                iconname="eye"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Text style={[styles.headtext, { fontSize: Fonts.size.medium }]}>Account Scoring Level</Text>
                            <View style={{ marginTop: 15 }} />
                            <Text style={styles.text}>Create an account so you can manage your 4 pillars of the family.</Text>
                            <View style={{ marginTop: 15 }} />
                            <Radiobtns flexDirection='row' thirdbtn Easy="Easy" Medium="Medium" Second="Second" />
                            <View style={{ marginTop: 15 }} />
                            <Text style={styles.text}>
                                You are signing up for a 14 day trial. At anytime you pick a plan,
                            </Text>
                            <View style={{ marginTop: 15 }} />
                            <Text style={styles.text}>
                                You are signing up for a 14 day trial. At anytime you pick a plan,
                            </Text>
                            <View style={{ marginTop: 15 }} />
                            <Button onPress={() => props.navigation.navigate('')} title={'Continue'}
                                borderRadius={10}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignUpScreen

