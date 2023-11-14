
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Header from '../../../components/header';
import { Avatar } from 'react-native-paper';
import Inputs from '../../../components/TextInput';
import Popup from '../../../components/popup';

const MyProfile = (props) => {
    const [visible, setVisible] = useState(false)
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [Dob, setDob] = useState('');

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
                            onPress2={() => setVisible(!visible)}
                            color={Colors.emailcolor} headtitle={props.DateOfBirth ? "Edit" : "Edit"} Iconname={props.DateOfBirth ? "Edit" : ""}
                            Icolor={Colors.emailcolor} />
                        <Popup icon btn1 btntitle1="Done"
                            headtext="Saved"
                            text="Profile updated successfully."
                            isModalVisible={visible} hide={() => (setVisible(!visible))} />
                        <Text style={styles.headtext}>My Profile</Text>
                        <View style={{ paddingHorizontal: 15 }} >
                            <View style={{ marginTop: 10 }} />
                            <TouchableOpacity
                                // onPress={() => props.navigation.navigate('Profile')}
                                style={styles.imgView}>
                                <Avatar.Image
                                    size={90}
                                    style={styles.image}
                                    source={Images.user.userProfile}
                                />
                            </TouchableOpacity>
                            <View style={{ marginTop: 15, paddingHorizontal: 5 }} >
                                <Inputs
                                    TextInput1
                                    // backgroundColor={''}
                                    borderRadius={10}
                                    placeholder="Matthew"
                                    text={fname}
                                    setText={setFname}
                                    secureTextEntry={true}
                                    formKey="fname"
                                />
                                <View style={{ marginTop: 15 }} />
                                <Inputs
                                    TextInput1
                                    // backgroundColor={''}
                                    borderRadius={10}
                                    placeholder="Ford"
                                    text={lname}
                                    setText={setLname}
                                    secureTextEntry={true}
                                    formKey="lname"
                                />
                                <View style={{ marginTop: 15 }} />
                                <Inputs
                                    TextInput1
                                    // backgroundColor={''}
                                    borderRadius={10}
                                    placeholder="4pillarfamily@gmail.com"
                                    text={email}
                                    setText={setEmail}
                                    secureTextEntry={true}
                                    formKey="email"
                                />
                                {props.DateOfBirth && (
                                    <>
                                        <View style={{ marginTop: 15 }} />
                                        <Inputs
                                            TextInput1
                                            // backgroundColor={''}
                                            borderRadius={10}
                                            placeholder="03/29/1954"
                                            text={Dob}
                                            setText={setDob}
                                            secureTextEntry={true}
                                            formKey="password"
                                        />
                                    </>
                                )
                                }

                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}
export default MyProfile

