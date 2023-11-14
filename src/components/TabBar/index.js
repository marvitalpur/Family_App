import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { Colors, Fonts } from '../../assets/theme';
import { BottomIcon1, BottomIcon1W, BottomIcon2, BottomIcon2W, BottomIcon3, BottomIcon3W, BottomIcon4, BottomIcon4W, BottomIcon5, BottomIcon5W } from '../../assets/theme/svgimages';
import Header from '../header';

const TabBar = (props) => {
    const { state } = props
    const [visible, setVisible] = useState({
        visibles: false,
        invisibles: true
    })
    const Tab = [
        { navTo: 'HomeScreen', svg: <BottomIcon1 />, svg2: <BottomIcon1W /> },
        { navTo: 'Affirmations', svg: <BottomIcon2 />, svg2: <BottomIcon2W /> },
        { navTo: 'PurposeScreen', svg: <BottomIcon3 />, svg2: <BottomIcon3W /> },
        { navTo: 'TeamScreen', svg: <BottomIcon4 />, svg2: <BottomIcon4W /> },
        { navTo: 'StreakScreen', svg: <BottomIcon5 />, svg2: <BottomIcon5W /> },
    ];
    return (
        <SafeAreaView style={styles.container}>
            {Tab.map((item, i) => (
                <>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate(item.navTo),
                                i === 2 ? setVisible({
                                    ...visible, visibles: true, invisibles: false,
                                })
                                    : setVisible({
                                        ...visible, visibles: false, invisibles: true,
                                    });
                        }}
                        style={{
                            alignItems: 'center',
                            backgroundColor: Colors.shadow2,
                            justifyContent: 'center',

                        }}
                        key={i}>
                        <View style={{ borderRadius: 10, padding: 2, backgroundColor: state.index === i ? Colors.background.primary : null }}>
                            {state.index === i ? item.svg : item.svg2}
                        </View>
                        <Text style={{
                            color: state.index === i ? Colors.white : Colors.gary9,
                            fontSize: Fonts.size.xxxSmall, textAlign: 'center'
                        }}>{item.navTo}</Text>
                    </TouchableOpacity >
                </>

            ))
            }


        </SafeAreaView >
    )
}

export default TabBar

