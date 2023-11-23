import { Text, View, ImageBackground, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import Slider from '../../../components/slider';
import { Colors } from '../../../assets/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import { useSelector } from 'react-redux';
const OnBoarding = (props) => {
    const authData = useSelector(state => state.auth)
    useEffect(() => {
        console.log(authData)
        if (authData.data == null) {
            props.navigation.navigate('Login');
        } else {
            props.navigation.replace('MyDrawer', { screen: 'MyTabs' });
        }
    }, [])
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={Images.backgroundImages.BackgroundImage}
                    resizeMode='cover' style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 5 }}>
                    <ScrollView
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={[styles.boxView, { flex: 1, borderRadius: 25 }]}>
                            <Slider />
                        </View>
                        <View style={[styles.boxView2, {}]}>
                            <Button button1 btn1
                                onPress={() => { props.navigation.navigate('Login') }}
                                borderRadius={10} title={'Sign in'} />
                            <View style={{ marginTop: 5 }} />
                            <Button button1 onPress={() => props.navigation.navigate('SignUpScreen')}
                                title={'Create an account'} borderwidth={1}
                                borderColor={Colors.white} borderRadius={10}
                            />
                        </View>
                    </ScrollView>
                </ImageBackground></SafeAreaView>

        </>
    )
}

export default OnBoarding;