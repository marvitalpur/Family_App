
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors, Fonts } from '../../../assets/theme';
import Header from '../../../components/header';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const StreakScreen = (props) => {
    const navigation = useNavigation()
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
                        <View style={{ marginTop: 25 }} />
                        <Text style={styles.headtext}>Journal</Text>
                        <View style={{ paddingHorizontal: 15, marginTop: 10, flex: 1 }} >
                            <TouchableOpacity onPress={() => { props.navigation.navigate('How_It_Works') }}
                                style={styles.box}>
                                <Text numberOfLines={1} style={styles.text}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut...</Text>
                                <Text style={[styles.text, { paddingTop: 10, color: Colors.text.secondary, fontSize: Fonts.size.xxSmall }]}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut...</Text>
                            </TouchableOpacity>
                            <View style={styles.textView}>
                                <Text style={{ color: Colors.shadow1 }}>08/30/1967</Text>
                                <Text style={{ color: Colors.shadow1 }}>06:30 PM</Text>
                            </View>
                            <View style={{ marginVertical: 10, marginTop: 25 }}>
                                <Button button1 btn1 onPress={() => navigation.navigate('WriteGratitude')} title={'Write Journal'}
                                    borderRadius={10}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default StreakScreen


