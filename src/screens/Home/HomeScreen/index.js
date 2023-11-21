import { Text, TouchableOpacity, View, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import CheckboxCompo from '../../../components/CheboxCompo'
import Button from '../../../components/Button';
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import Popup from '../../../components/popup';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = (props) => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false)
    const list = [
        {
            id: 1, text: "Faith", text2: "Pray or Meditate",
            onPress: () => setVisible(!visible)
        },
        { id: 2, text: "Faith", text2: "Read Bible" },
        { id: 3, text: "Family", text2: "Invest in marriage" },
        { id: 4, text: "Family", text2: "Invest in family" },
        { id: 5, text: "Fitness", text2: "Exercise" },
        { id: 6, text: "Fitness", text2: "Morning Nutrition" },
        { id: 7, text: "Education", text2: "Learn New" },
        { id: 8, text: "Goals", text2: "Review & Grow" },
    ]

    const [checked, setChecked] = useState(1);
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
                        <View style={{ alignSelf: 'center', padding: 10, marginTop: 10 }}>
                            <Image source={Images.logo.gamelogo} resizeMode='contain' />
                        </View>
                        <Text style={[styles.text, { paddingLeft: 15, color: Colors.text.quaternary }]}>
                            SUNDAY, APR 9
                        </Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>FOUR PILLARS OF GROWTH</Text>
                        <View style={styles.lists}>
                            {list.map((item) => {
                                return (
                                    <>
                                        <ScrollView>
                                            <CheckboxCompo
                                                onClick={item.onPress}
                                                checked={checked === item.id}
                                                setChecked={() => setChecked(item.id)}
                                                text={item.text}
                                                text2={item.text2}
                                                itemId={item.id}
                                            />
                                        </ScrollView>
                                    </>
                                )
                            })}
                        </View>
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>BONUS POINTS</Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.text2}>Write Gratitude & Journal & Get Points</Text>
                        <View style={{ marginTop: 5 }} />
                        <View style={styles.boxView}>
                            <Button button2 btn2 onPress={() => { }} borderRadius={10} title={'Write Gratitude'} title1="2 remainings" />
                            <View style={{ marginTop: 15 }} />
                            <Button button2 onPress={() => { props.navigation.navigate('My Journals') }} title={'Start Writing Journal'} borderwidth={1} borderColor={Colors.white} borderRadius={10}
                            />
                        </View>
                        <View style={{ marginTop: 5 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text, { fontSize: Fonts.size.large, color: Colors.text.tertiary }]}>
                                Weekly Tasks</Text>
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.text2}>Write Gratitude & Journal & Get Points</Text>
                        <View style={{ marginTop: 15 }} />
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text, { fontSize: Fonts.size.large, color: Colors.text.tertiary }]}>
                                AFFIRMATIONS</Text>
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.text2}>Write Gratitude & Journal & Get Points</Text>
                        <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />

                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text, { color: Colors.text.secondary }]}>
                                Completed</Text>
                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)}
                                btn
                                btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />
                        </View>
                        <View style={{ marginTop: 10, paddingHorizontal: 15 }} >
                            <Text style={[styles.text, { fontSize: Fonts.size.large, color: Colors.text.tertiary }]}>
                                PURPOSE</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.text,]}>
                                Daily Habits</Text>
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
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
                            <Text onPress={() => props.navigation.navigate('PurposeScreen')} style={[styles.seealltext,]}>
                                See All</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Radiobtns onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                backgroundColor={Colors.shadow1}
                                Easy="Start your day by waking up at the same"
                                Medium="Start your day by waking up at the same" />

                        </View>
                        <View style={{ marginTop: 10 }} />
                        <View style={{ marginTop: 10 }} />
                        <View style={styles.textView}>
                            <Text style={[styles.text,
                            {}]}>
                                My Team</Text>
                            <Text style={[styles.seealltext,]}>
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
                        <Popup
                            icon btn1 icon1 btn2={() => setVisible(false)}
                            btntitle2="Cancel" btntitle1="Confirm"
                            headtext="Confirm"
                            text="Remember you can't uncheck this term again?"
                            isModalVisible={visible} hide={() => {
                                setVisible(false)
                                setShow(!show)
                            }} />
                        <Popup
                            btn1 btntitle1="Done"
                            headtext="Hurray!"
                            text="You got an 1 point today!"
                            isModalVisible={show} hide={() => {
                                setShow(false)
                                setVisible(false)
                                // navigation.navigate('My Journals')
                            }} />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HomeScreen

