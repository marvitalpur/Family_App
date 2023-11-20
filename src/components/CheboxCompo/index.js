import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Fonts } from '../../assets/theme'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckboxCompo = (props) => {
    const { checked, setChecked } = props
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }} >
                <View>
                    <Text style={[styles.text, { color: checked ? Colors.warning : Colors.text.secondary }]}>{props.text}</Text>
                    <Text style={[styles.text2, { color: checked ? Colors.warning : Colors.text.tertiary }]}>
                        {props.text2}
                    </Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setChecked(!checked)}>
                    <Icon
                        name={checked ? 'check-square' : 'square-o'}
                        size={20}
                        color={checked ? Colors.warning : Colors.text.tertiary}
                    />
                    {/* You can add additional text or styling here */}
                </TouchableOpacity>
            </View>
        </TouchableOpacity >

    )
}

export default CheckboxCompo

