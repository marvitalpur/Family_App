import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Images from '../../assets/Images'
import { Trashbox } from '../../assets/theme/svgimages'

const UserCompo = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.image}>
                        <Image source={props.Image}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode='contain' />
                    </View >
                    <View style={{ paddingHorizontal: 15 }}>
                        <Text style={styles.name} >{props.name}
                        </Text>
                        <Text style={styles.email} >{props.email}
                        </Text>
                    </View>
                </View>
                {props.Trashbox ? (<Trashbox />) : (<Text style={styles.priceText} >{props.priceText}
                </Text>)}
            </View >
        </>
    )
}

export default UserCompo

