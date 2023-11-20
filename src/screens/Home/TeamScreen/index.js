import { Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import Header from '../../../components/header';
import { RadioButton } from 'react-native-paper';
import UserCompo from '../../../components/userCompo';
import Inputs from '../../../components/TextInput';
import { DimondIcon, Trashbox } from '../../../assets/theme/svgimages';
import Radiobtns from '../../../components/Radiobtns';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';


const TeamScreen = (props) => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState('');
    const Purpose = [
        { id: 1, text: "Daily Habits", image: Images.icons.callender, priceText: '80', name: 'Victoria Fox', email: 'janice.anderws@gmail.com' },
        { id: 2, text: "Weekly Tasks", image: Images.icons.envelope, priceText: '120', name: 'Victoria Fox', email: 'janice.anderws@gmail.com' },
        { id: 3, text: "Monthly Goals", image: Images.icons.dumbell, priceText: '70', name: 'Victoria Fox', email: 'janice.anderws@gmail.com' },
        { id: 4, text: "Daily Habits", image: Images.icons.callender, priceText: '120', name: 'Victoria Fox', email: 'janice.anderws@gmail.com' },
    ]
    const [selectedOption, setSelectedOption] = useState('RecentTasks');
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <Header onPress={() => navigation.openDrawer()
                }
                    image={Images.user.userProfile}
                    imgPress={() => props.navigation.navigate('MyProfile')}
                />
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Text style={[styles.text, { fontSize: Fonts.size.medium, }]}>Invite Team Member</Text>
                        <View style={{ marginTop: 5 }} />
                        <Text style={[styles.text, {}]}>Enter Email Address</Text>
                        <View style={{ marginTop: 10 }}>
                            <Inputs
                                TextInput1
                                // backgroundColor={''}
                                borderRadius={10}
                                placeholder="Email"
                                // text={email}
                                // setText={setEmail}
                                secureTextEntry={true}
                                formKey="email"
                            />
                        </View>
                        <View style={{ marginTop: 15 }} />
                        <Button button1 btn1 title={'Send Invitation'}
                            borderRadius={10}
                        />
                        <Text style={[styles.text, { fontSize: Fonts.size.medium, }]}>My Team</Text>
                        <>
                            {Purpose.map((item, index) => {
                                return (
                                    <>
                                        <View style={{}}>
                                            <UserCompo
                                                Trashbox={<Trashbox />}
                                                name={item.name}
                                                email={item.email}
                                                Image={Images.user.userProfile} />
                                        </View>
                                    </>
                                )
                            })}
                        </>

                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default TeamScreen

