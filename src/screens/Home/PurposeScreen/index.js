
import { Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import Header from '../../../components/header';
import Inputs from '../../../components/TextInput';
import { DimondIcon } from '../../../assets/theme/svgimages';
import Radiobtns from '../../../components/Radiobtns';
import Popup from '../../../components/popup';
import DummyData from '../../../components/DummyData';
import { useNavigation, useRoute } from '@react-navigation/native';


const PurposeScreen = ({ route }) => {

    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    // const { headingText = 'Default Heading', header = false } = params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <Header onPress={() => navigation.openDrawer()}
                    image={Images.user.userProfile}
                    imgPress={() => navigation.navigate('MyProfile')}
                />
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.text, { fontSize: Fonts.size.xxLarge }]}>Purpose</Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <DimondIcon />
                                <Text style={[{ paddingLeft: 5, fontSize: Fonts.size.xxSmall, color: Colors.text.tertiary }]}>145 Pts</Text>
                            </View>
                        </View>
                        <View style={styles.btnrow}>
                            <TouchableOpacity onPress={() => setSelectedOption(0)} >
                                <Text style={[styles.btntext, selectedOption === 0 && styles.selectedText]}>
                                    Recent Tasks
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedOption(1)}>
                                <Text style={[styles.btntext, selectedOption === 1 && styles.selectedText]}>
                                    Completed Tasks
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 5 }} />
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
                            }} />

                        {selectedOption === 1 ? (
                            <>
                                {DummyData.map((item, index) => {
                                    return (
                                        <>
                                            <View style={{ marginTop: 10 }} />
                                            <View style={{}}>
                                                <Radiobtns btn
                                                    onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                                    backgroundColor={Colors.shadow1}
                                                    Easy="Start your day by waking up at the same"
                                                    Medium="Start your day by waking up at the same" />
                                            </View>
                                        </>
                                    )
                                })}

                            </>
                        ) : (
                            <>
                                {DummyData.map((item, index) => {
                                    return (
                                        <>
                                            <View style={{ marginTop: 10 }} />
                                            <View style={{}}>
                                                <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                                    backgroundColor={Colors.shadow1}
                                                    Easy="Start your day by waking up at the same"
                                                    Medium="Start your day by waking up at the same" />

                                            </View>

                                        </>
                                    )
                                })}
                            </>
                        )
                        }
                        <View style={{ marginTop: 15, paddingHorizontal: 5 }}>
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Type something..."
                                // text={email}
                                // setText={setEmail}
                                secureTextEntry={true}
                                formKey="email"
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default PurposeScreen






