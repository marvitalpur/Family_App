
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


const How_It_Works = (props) => {
    const [password, setPassword] = useState('')
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
                        <View>
                            <View style={{ marginTop: 15 }} />
                            <Text style={styles.headtext}>How It Works?</Text>
                            <View style={{ marginTop: 10 }} />
                            <Text style={[styles.text, { color: Colors.text.secondary }]}>How Scoring / Point Accumulation Works</Text>
                            <View style={{ marginTop: 10 }} />
                            <Text style={[styles.text, { lineHeight: 39 }]}>Clicking a pillar box = 1 point Writing 3 gratitude = 1 point{'/n'}  Writing Journal =  1 point {'/n'} Clicking on ALL Affirmations = 1 point {'/n'}Clicking on ALL Daily Habits = 1 point {'/n'} Total of 12 points a day</Text>

                        </View>
                    </View>

                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView >

    )
}


export default How_It_Works

