
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Header from '../../../components/header';
import Inputs from '../../../components/TextInput';
import Popup from '../../../components/popup';


const ForgetPAssword = (props) => {
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false)
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
                            color={Colors.emailcolor} headtitle="Save" />
                        <Text style={styles.headtext}>Reset Password</Text>
                        <View style={{ marginTop: 15, paddingHorizontal: 15 }} >
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Current Password"
                                text={password}
                                setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="New Password"
                                text={password}
                                setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                            />
                            <View style={{ marginTop: 15 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Confirm Password"
                                text={password}
                                setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                            />
                        </View>
                        <Popup
                            icon btn1
                            headtext="Saved"
                            text="Password updated successfully."
                            btntitle1="Done"
                            isModalVisible={visible}
                            setVisible={false}
                            hide={() => {
                                setVisible(false)
                                props.navigation.navigate('HomeScreen')
                            }} />
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}
export default ForgetPAssword;