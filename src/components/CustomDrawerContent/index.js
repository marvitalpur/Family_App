import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import Images from '../../assets/Images';
import { Colors } from '../../assets/theme';
import Header from '../header';
import { Doc, DrawerIcon, Help, Lock, LogOut, Message, QuestionMark, User } from '../../assets/theme/svgimages';


const CustomDrawerContent = (props) => {
    const sidebarData = [
        {
            id: 1,
            screen: 'My Profile',
            IconImage: <User />
        },
        {
            id: 2,
            screen: 'My Journals',
            IconImage: <Doc />
        },
        {
            id: 3,
            screen: 'Reset Password',
            IconImage: <Lock />
        },
        {
            id: 4,
            screen: 'Email Support',
            IconImage: <Message />
        },

        {
            id: 5,
            screen: 'How It Works?',
            IconImage: <QuestionMark />

        },
        {
            id: 6, screen: 'Help',
            IconImage: <Help />
        },

    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <View style={{ paddingHorizontal: 15 }}>
                </View>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.userView}>
                    <Avatar.Image
                        size={40}
                        style={styles.avtar}
                        source={Images.user.userProfile}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.name}>Ronald Cook</Text>
                        <Text
                            style={styles.email}>
                            mike.headerson@gmail.com
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                    borderWidth: 0.5, borderColor: Colors.placeHolderColor,
                    marginTop: 30
                }} />

                <View style={{ flex: 2, }}>
                    <FlatList
                        contentContainerStyle={{
                            flexGrow: 1,
                            // backgroundColor: 'red',
                            paddingLeft: 5,
                        }}
                        ItemSeparatorComponent={<View style={{ marginVertical: -15 }} />}
                        data={sidebarData}
                        scrollEnabled={false}
                        renderItem={({ item, index }) => (
                            <SidebarButton
                                item={item}
                                index={index}
                                // showBadge={item?.showBadge || false}
                                // setActiveButton={setActiveButton}
                                // cart={cart ?? []}
                                // activeButton={activeButton}
                                navigation={props.navigation}
                            />
                        )}
                    />
                    <View style={styles.content}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <LogOut />
                            <Text style={styles.list}>logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </SafeAreaView >
    )
}

const SidebarButton = ({
    activeButton,
    setActiveButton,
    item,
    index,
    IconImage,
    navigation,
    showBadge = false,
    cart = [],

}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0}
            // onPress={() => {
            //     setActiveButton(index);
            //     if (item?.screen == 'Payment Settings') {
            //         navigation.navigate('GetCardsScreen');
            //     } else {
            //         navigation.navigate(item.screen);
            //     }
            // }}
            style={styles.content}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {item.IconImage}
                <Text style={styles.list}> {item.screen}</Text>
            </View>
        </TouchableOpacity >
    );
};




export default CustomDrawerContent

