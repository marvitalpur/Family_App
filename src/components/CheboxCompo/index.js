import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Fonts } from '../../assets/theme'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckboxCompo = (props) => {
    const { checked, setChecked } = props
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }} >
                <View>
                    <Text style={[styles.text, { color: checked ? Colors.warning : Colors.gray11 }]}>{props.text}</Text>
                    <Text style={[styles.text2, { color: checked ? Colors.warning : Colors.gray11 }]}>
                        {props.text2}
                    </Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setChecked(!checked)}>
                    <Icon
                        name={checked ? 'check-square' : 'square-o'}
                        size={20}
                        color={checked ? Colors.warning : Colors.gray11}
                    />
                    {/* You can add additional text or styling here */}
                </TouchableOpacity>
            </View>
        </View >

    )
}

export default CheckboxCompo

