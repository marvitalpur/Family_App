import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Button from '../../../components/Button'
import { Colors, Fonts } from '../../../assets/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'
import Images from '../../../assets/Images'
import { ProgressBar } from 'react-native-paper'
import Header from '../../../components/header'
import Radiobtns from '../../../components/Radiobtns'
import { ScrollView } from 'react-native'

const PlanScreen = (props) => {
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
                        <View style={{ marginTop: 5 }} />
                        <Header />
                        <View style={{ marginTop: 15 }} />
                        <View style={{ paddingHorizontal: 15 }}>
                            <ProgressBar progress={0.5} color={Colors.background.secondary} />
                        </View>
                        <View style={{ marginTop: 15 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>Plans</Text>
                        <View style={{ marginTop: 15 }} />
                        <Text style={styles.text}>
                            Life is about choices. you can spread the love and help family and friends join a path of success or you can pick a plan below.
                            {'\n'} {'\n'} For every 2 friends that you get to sign up you will get 1 year free or get 4 friends to sign up and you can get 2 years or a year family plan free.
                        </Text>
                        <View style={{ marginTop: 15 }} />
                        <View style={{ marginTop: 15, paddingHorizontal: 15 }} >
                            <Button btn1 onPress={handleLogin} title={'Invite Friends Now'} borderRadius={10} />
                        </View>
                        <View style={{ marginTop: 15 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>Or Pick a Plan</Text>
                        <View style={{ marginTop: 15 }} />
                        <Text style={styles.text}>
                            Life is about choices. you can spread the love and help family and friends join a path of success or you can pick a plan below.
                            {'\n'} {'\n'} For every 2 friends that you get to sign up you will get 1 year free or get 4 friends to sign up and you can get 2 years or a year family plan free.
                        </Text>
                        <View style={{ marginTop: 15 }} />
                        <Radiobtns Easy="Invited Family Plan" Medium="Medium" />
                        <View style={{ marginTop: 15 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>Monthly Plans</Text>
                        <View style={{ marginTop: 15 }} />
                        <Radiobtns Easy="Individual Plan $3.95/month" Medium="Family Plan $12.95/month 5 users" />
                        <View style={{ marginTop: 15 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>Yearly Plans</Text>
                        <View style={{ marginTop: 15 }} />
                        <Radiobtns Easy="Individual Plan $23.70/year" Medium="Family Plan $77.70/year 5 users" />
                        <View style={{ marginTop: 15, paddingHorizontal: 15 }} >
                            <Button btn1 onPress={handleLogin} title={'Finish'} borderRadius={10} />
                        </View>
                        <View style={{ marginTop: 15 }} />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default PlanScreen

