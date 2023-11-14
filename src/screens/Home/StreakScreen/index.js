import { Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import CheckboxCompo from '../../../components/CheboxCompo'
import Button from '../../../components/Button';
import Header from '../../../components/header';

const StreakScreen = () => {
    const list = [
        { id: 1, text: "Faith", text2: "Pray or Meditate" },
        { id: 2, text: "Faith", text2: "Read Bible" },
        { id: 3, text: "Family", text2: "Invest in marriage" },
        { id: 4, text: "Family", text2: "Invest in family" },
        { id: 5, text: "Fitness", text2: "Exercise" },
        { id: 6, text: "Fitness", text2: "Morning Nutrition" },
        { id: 7, text: "Education", text2: "Learn New" },
        { id: 8, text: "Goals", text2: "Review & Grow" },
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <Header onPress={() => props.navigation.openDrawer()} />
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            SUNDAY, APR 9
                        </Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>FOUR PILLARS OF GROWTH</Text>
                        <View style={styles.lists}>
                            {list.map((item) => {
                                return (
                                    <>
                                        <ScrollView>
                                            <CheckboxCompo text={item.text} text2={item.text2} />
                                        </ScrollView>
                                    </>
                                )
                            })}
                        </View>
                        <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge }]}>BONUS POINTS</Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={styles.text}>Write Gratitude & Journal & Get Points</Text>
                        <View style={{ marginTop: 5 }} />
                        <View style={styles.boxView}>
                            <Button button2 btn2 onPress={() => { }} borderRadius={10} title={'Write Gratitude'} title1="2 remainings" />
                            <View style={{ marginTop: 15 }} />
                            <Button button2 onPress={() => { }} title={'Start Writing Journal'} borderwidth={1} borderColor={Colors.white} borderRadius={10}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default StreakScreen


