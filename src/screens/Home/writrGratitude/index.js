import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Header from '../../../components/header';
import { TextInput } from 'react-native-paper';
import Button from '../../../components/Button';
import styles from './styles';
import Inputs from '../../../components/TextInput';
import Popup from '../../../components/popup';

const WriteGratitude = (props) => {
    const [writingJournal, setWritingJournal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}
            >
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>
                        {/* Your Header Component */}
                        <Header header
                            back={"Back"}
                            backgroundColor={Colors.shadow1}
                            onPress1={() => props.navigation.goBack()}
                            onPress2={() => props.navigation.navigate('SignUpScreen')}
                            color={Colors.emailcolor}
                        />
                        <View style={{ marginTop: 25 }} />
                        <Text style={styles.headtext}>Write Gratitude</Text>
                        <View style={{ paddingHorizontal: 15, marginTop: 10, flex: 1 }}>
                            <Text style={styles.text}>Journal Title</Text>
                            <View style={{ paddingTop: 5 }} />
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Gratitude Title..."
                                // text={password}
                                // setText={setPassword}
                                secureTextEntry={true}
                                formKey="password"
                            />
                            <View style={{ paddingTop: 15 }} />
                            <Text style={styles.text}>Journal Description</Text>
                            <View style={{ paddingTop: 15 }} />
                            <View style={styles.textAreaContainer}>
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    activeUnderlineColor="transparent"
                                    underlineColor="transparent"
                                    selectionColor="#000"
                                    placeholder="Write...."
                                    placeholderTextColor={Colors.text.secondary}
                                    numberOfLines={5}
                                    multiline={true}
                                />
                            </View>
                        </View>
                        <View style={{ marginVertical: 10, paddingHorizontal: 15 }}>
                            <Button
                                button1
                                btn1
                                onPress={() => { setVisible(!visible) }}
                                title={'Write Journal'}
                                borderRadius={10}
                            />
                        </View>
                        <Popup
                            icon btn1 icon1 btn2={() => setVisible(false)}
                            btntitle2="Cancel" btntitle1="Confirm"
                            headtext="Confirm"
                            text="Remember you can't uncheck this term again?"
                            isModalVisible={visible} hide={() => setShow(!show)} />
                        <Popup
                            btn1 btntitle1="Done"
                            headtext="Hurray!"
                            text="You got an 1 point today!"
                            isModalVisible={show} hide={() => {
                                setShow(false)
                                setVisible(false)
                                props.navigation.navigate('My Journals')
                            }} />
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default WriteGratitude;
