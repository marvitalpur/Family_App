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

const InviteScreen = (props) => {
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
                        <Header />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>Invite Friends</Text>
                        <View style={{ marginTop: 15 }} />
                        <Text style={styles.text}>
                            For every 2 friends that you get to sign up you will get 1 year free or get 4 friends to sign up and you can get 2 years or a year family plan free.
                        </Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.text2}>
                            Enter a Personal Message
                        </Text>
                        <View style={{ marginTop: 15 }} />
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Type..."
                                placeholderTextColor={Colors.grey3}
                                numberOfLines={3}
                                multiline={true}
                                activeUnderlineColor="transparent"
                                underlineColor="transparent"
                                selectionColor="#000"
                                theme={{ roundness: 10 }}
                            />
                        </View>
                        <View style={{ marginTop: 15 }} />
                        <Text style={styles.text2}>
                            Enter emails addresses separated by a comma (,)
                        </Text>
                        <View style={{ marginTop: 15 }} />
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                activeUnderlineColor="transparent"
                                underlineColor="transparent"
                                selectionColor="#000"
                                placeholder="Email address..."
                                placeholderTextColor={Colors.grey3}
                                numberOfLines={5}
                                theme={{ roundness: 10 }}
                                multiline={true}
                            />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 15 }} >
                        <Button btn1 onPress={() => props.navigation.navigate('PlanScreen')} title={'Invite Friends'} borderRadius={10} />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >

    )
}

export default InviteScreen

