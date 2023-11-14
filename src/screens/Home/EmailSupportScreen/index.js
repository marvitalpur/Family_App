
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Header from '../../../components/header';
import { Avatar, TextInput } from 'react-native-paper';
import Inputs from '../../../components/TextInput';
import Button from '../../../components/Button';
import Popup from '../../../components/popup';

const EmailSupportScreen = (props) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false)


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
                            back={"Back"}
                            backgroundColor={Colors.shadow1}
                            onPress1={() => props.navigation.goBack()}
                            onPress2={() => props.navigation.navigate('SignUpScreen')}
                            color={Colors.emailcolor}
                        />
                        <Text style={styles.headtext}>Email Support</Text>
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }} >
                            <Text style={{ color: Colors.text.tertiary }}>Your Email</Text>
                            <View style={{ marginTop: 5 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Write"
                                text={email}
                                setText={setEmail}
                                secureTextEntry={true}
                                formKey="email"
                            />
                            <View style={{ marginTop: 5 }} />
                            <Text style={{ color: Colors.text.tertiary }}>Your Subject</Text>
                            <View style={{ marginTop: 5 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Write"
                                text={message}
                                setText={setMessage}
                                secureTextEntry={true}
                                formKey="password"
                            />
                            <View style={{ marginTop: 5 }} />
                            <Text style={{ color: Colors.text.tertiary }}>Your Message</Text>
                            <View style={{ marginTop: 5 }} />
                            <View style={styles.textAreaContainer} >
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    activeUnderlineColor="transparent"
                                    underlineColor="transparent"
                                    selectionColor="#000"
                                    placeholder="Write..."
                                    placeholderTextColor={Colors.grey3}
                                    numberOfLines={5}
                                    theme={{ roundness: 10 }}
                                    multiline={true}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginTop: 25, position: 'absolute', bottom: 5,
                            width: '100%',
                            paddingHorizontal: 15,

                        }} >
                            <Popup icon btn1 btntitle1="Done"
                                headtext="Submitted"
                                text="Our team will contact you in 24 hours."
                                isModalVisible={visible} hide={() => { props.navigation.navigate('HomeScreen') }} />
                            <Button button1 btn1 onPress={() => setVisible(!visible)} title={'Submit'}
                                borderRadius={10} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default EmailSupportScreen

