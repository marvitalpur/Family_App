import { Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import PurposeCompo from '../../../components/purposeCompo';
import Popup from '../../../components/popup';
import UserCompo from '../../../components/userCompo';
import DummyData from '../../../components/DummyData';
import { useNavigation } from '@react-navigation/native';


const Affirmations = (props) => {
    const navigation = useNavigation();
    const [show, setShow] = useState('');
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = React.useState('');
    const [selectedOption, setSelectedOption] = useState(0);
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
                        <View style={{ marginTop: 15 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xxLarge }]}>Purpose</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                            <ScrollView
                                horizontal
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1 }}>
                                {DummyData.map((item, index) => {
                                    return (
                                        <>
                                            <View style={{}}>
                                                <PurposeCompo
                                                    btnPress={() => setVisible(!visible)}
                                                    text={item.text}
                                                    Image={item.image} />
                                            </View>
                                        </>
                                    )
                                })}
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 5 }} />
                        <View style={{ marginTop: 5 }} />
                        <Text style={[styles.headtext,
                        {
                            fontSize: Fonts.size.xLarge,
                            color: Colors.text.secondary
                        }]}>
                            Recent Activity</Text>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Daily Habits</Text>
                            <Text
                                onPress={() => navigation.navigate('PurposeScreen', { headingText: "Daily Habits" })}
                                style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Weekly Tasks</Text>
                            <Text
                                onPress={() => navigation.navigate('PurposeScreen', { headingText: "Weekly Tasks" })}
                                style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Monthly Goals</Text>
                            <Text
                                onPress={() => navigation.navigate('PurposeScreen', { headingText: "Monthly Goals" })}
                                style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />

                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Affirmations</Text>
                            <Text
                                onPress={() => navigation.navigate('PurposeScreen', { headingText: "Affirmations" })}
                                style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />

                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,
                            { color: Colors.text.secondary }]}>
                                Completed</Text>
                            <Text
                                onPress={() => navigation.navigate('PurposeScreen', { headingText: "Compeleted" })}
                                style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns btn
                                onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,
                            {}]}>
                                My Team</Text>
                            <Text style={[styles.seealltext,]} onPress={() => navigation.navigate('PurposeScreen', { headingText: "My Team" })}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns
                                onPressbtn={() => setVisible(!visible)}
                                borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
                            <View style={styles.btnrow}>
                                <TouchableOpacity onPress={() => setSelectedOption(0)} >
                                    <Text style={[styles.btntext, selectedOption === 0 && styles.selectedText]}>
                                        Weekly
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelectedOption(1)}>
                                    <Text style={[styles.btntext, selectedOption === 1 && styles.selectedText]}>
                                        Monthly
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelectedOption(2)}>
                                    <Text style={[styles.btntext, selectedOption === 2 && styles.selectedText]}>
                                        Lifetime
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {DummyData.map((item, index) => {
                                return (
                                    <>
                                        <View style={{}}>
                                            <UserCompo
                                                priceText={item.priceText}
                                                name={item.name}
                                                email={item.email}
                                                Image={Images.user.userProfile} />
                                        </View>
                                    </>
                                )
                            })}

                            <Popup
                                icon btn1 icon1 btn2={() => setVisible(false)}
                                btntitle2="Cancel" btntitle1="Confirm"
                                headtext="Confirm"
                                text="Remember you can't uncheck this term again?"
                                isModalVisible={visible} hide={() => setVisible(!visible)} />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >
    )
}
export default Affirmations