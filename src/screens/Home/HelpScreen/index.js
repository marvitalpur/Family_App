
import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Header from '../../../components/header';
import Inputs from '../../../components/TextInput';


const HelpScreen = (props) => {
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, paddingTop: 5, backgroundColor: Colors.green }}>
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
                            onPress2={() => props.navigation.navigate('SignUpScreen')}
                            color={Colors.emailcolor} headtitle="Save" />
                        <Text style={styles.headtext}>Help</Text>
                        <View style={{ paddingTop: 10, paddingHorizontal: 15 }} >
                            <View style={styles.videoView}>
                                <Image source={Images.backgroundImages.bg1} />
                                <View style={{ paddingTop: 10 }} />
                                <Image source={Images.backgroundImages.bg2} />
                                <View style={{ paddingTop: 10 }} />
                                <Image source={Images.backgroundImages.bg3} />
                            </View>

                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}


export default HelpScreen

