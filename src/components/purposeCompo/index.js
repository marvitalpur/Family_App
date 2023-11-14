import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Images from '../../assets/Images'

const PurposeCompo = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Image source={props.Image} />
            </View >
            <Text style={styles.text} >{props.text}
            </Text>
        </>
    )
}

export default PurposeCompo

