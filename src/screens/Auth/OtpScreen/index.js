import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Button from '../../../components/Button'
import { Colors, Fonts } from '../../../assets/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'
import Images from '../../../assets/Images'
import { ProgressBar, TextInput } from 'react-native-paper'
import Header from '../../../components/header'
import Radiobtns from '../../../components/Radiobtns'
import { ScrollView } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'


const OtpScreen = (props) => {
    const handleLogin = () => {
        props.navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, paddingTop: 15, backgroundColor: Colors.green }}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Header header
                            onPress1={() => props.navigation.goBack()}
                            onPress2={() => props.navigation.navigate('SignUpScreen')}
                            color={Colors.white} headtitle="" />
                        <View style={{ marginTop: 15 }} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <ProgressBar progress={1} color={Colors.background.primary} />
                        </View>
                        <View style={{ marginTop: 15 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>Verify your account</Text>
                        <View style={{ marginTop: 15 }} />
                        <Text style={styles.text}>
                            We've sent an 4 digit code to your email {'\n'} <Text style={{ color: Colors.emailcolor }}>
                                4pillarfamily@gmail.com</Text>
                        </Text>
                        <View style={{ marginTop: 5, alignItems: 'center' }} >
                            <OTPInputView
                                style={{ width: '80%', height: 200 }}
                                pinCount={4}
                                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                // onCodeChanged = {code => { this.setState({code})}}
                                autoFocusOnLoad
                                secureTextEntry
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 15 }} >
                            <Button button1 btn1 onPress={() => props.navigation.navigate('PlanScreen')} title={'Verify'} borderRadius={10} />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >

    )
}

export default OtpScreen

