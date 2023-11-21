import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { Colors, Fonts } from '../../assets/theme';
import { BottomIcon1, BottomIcon1W, BottomIcon2, BottomIcon2W, BottomIcon3, BottomIcon3W, BottomIcon4, BottomIcon4W, BottomIcon5, BottomIcon5W } from '../../assets/theme/svgimages';
import HomeScreen from '../../screens/Home/HomeScreen';
import TeamScreen from '../../screens/Home/TeamScreen';
import StreakScreen from '../../screens/Home/StreakScreen';
import Affirmations from '../../screens/Home/Affirmations';
import PurposeScreen from '../../screens/Home/PurposeScreen';

const MyTabs = (props) => {
    const [seleted, setSelected] = useState(0);
    const [products, setProducts] = useState(0);
    const { state } = props
    const [visible, setVisible] = useState({
        visibles: false,
        invisibles: true
    })
    return (
        <>
            <SafeAreaView style={styles.container}>
                {seleted == 0 ?
                    <HomeScreen /> :
                    seleted == 1 ?
                        <Affirmations />
                        : seleted == 2 ?
                            <PurposeScreen /> :
                            seleted == 3 ?
                                <TeamScreen /> :
                                <StreakScreen />}
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => setSelected(0)} style={[styles.bottomTab,]}>
                        <View style={{ backgroundColor: seleted == 0 ? "#5D36FE" : null, borderRadius: 5 }}>
                            {seleted == 0 ?
                                (<BottomIcon1 />) :
                                (<BottomIcon1W />)}
                        </View>
                        <Text style={{ color: seleted == 0 ? Colors.text.tertiary : Colors.text.secondary }} >Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(1)}
                        style={[styles.bottomTab,]}>
                        <View style={{ backgroundColor: seleted == 1 ? "#5D36FE" : null, borderRadius: 5 }}>
                            {seleted == 1 ?
                                (<BottomIcon2 />) :
                                (<BottomIcon2W />)}
                        </View>
                        <Text style={{ color: seleted == 1 ? Colors.text.tertiary : Colors.text.secondary }} >Purpose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(2)} style={[styles.bottomTab,
                    ]}>
                        <View style={{ backgroundColor: seleted == 2 ? "#5D36FE" : null, borderRadius: 5 }}>
                            {seleted == 2 ?
                                (<BottomIcon3 />) :
                                (<BottomIcon3W />)}
                        </View>
                        <Text style={{ color: seleted == 2 ? Colors.text.tertiary : Colors.text.secondary }} >Affirmations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(3)} style={[styles.bottomTab,
                    {}]}>
                        <View style={{ backgroundColor: seleted == 3 ? "#5D36FE" : null, borderRadius: 5 }}>
                            {seleted == 3 ? (<BottomIcon4 />) :
                                (<BottomIcon4W />)}
                        </View>
                        <Text style={{ color: seleted == 3 ? Colors.text.tertiary : Colors.text.secondary }} >Team</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(4)} style={[styles.bottomTab,]}>
                        <View style={{ backgroundColor: seleted == 4 ? "#5D36FE" : null, borderRadius: 5 }}>
                            {seleted == 4 ?
                                (<BottomIcon5 />) :
                                (<BottomIcon5W />)}
                        </View>
                        <Text style={{ color: seleted == 4 ? Colors.text.tertiary : Colors.text.secondary }} >Streaks</Text>
                    </TouchableOpacity>
                </View >
            </SafeAreaView >
        </>
    )
}

export default MyTabs

