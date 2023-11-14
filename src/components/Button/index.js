import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../assets/theme';
import Fonts from '../../assets/theme';



const Button = (props) => {
    return (
        <>
            <View>
                {props.button1 && (
                    <>
                        {props.btn1 ?
                            (<LinearGradient style={[styles.container, {
                                borderWidth: props.borderwidth,
                                borderColor: props.borderColor, borderRadius: props.borderRadius
                            }]}
                                colors={[Colors.background.primary, Colors.background.secondary]}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}>
                                <TouchableOpacity onPress={props.onPress} style={styles.container}>
                                    <Text style={styles.btntext}>{props.title}</Text>
                                </TouchableOpacity>
                            </LinearGradient>) : (
                                <TouchableOpacity onPress={props.onPress}
                                    style={[styles.container, {
                                        borderWidth: props.borderwidth,
                                        borderColor: props.borderColor, borderRadius: props.borderRadius
                                    }]}>
                                    <Text style={styles.btntext}>{props.title}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </>
                )}
                {props.button2 && (
                    <>
                        {props.btn2 ?
                            (<LinearGradient style={[styles.container2, {
                                borderWidth: props.borderwidth,
                                borderColor: props.borderColor, borderRadius: props.borderRadius,
                                paddingHorizontal: 15

                            }]}
                                colors={[Colors.background.primary, Colors.background.secondary]}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}>
                                <TouchableOpacity onPress={props.onPress} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[styles.btntext2, { fontSize: 16 }]}>{props.title}</Text>
                                    <Text style={[styles.btntext2, { fontSize: 10 }]}>{props.title1}</Text>
                                </TouchableOpacity>
                            </LinearGradient>) : (
                                <TouchableOpacity onPress={props.onPress}
                                    style={[styles.container, {
                                        backgroundColor: Colors.white,
                                        borderWidth: props.borderwidth,
                                        borderColor: props.borderColor, borderRadius: props.borderRadius
                                    }]}>
                                    <Text style={styles.btntext3}>{props.title}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </>

                )}
            </View >
        </>
    )
}
export default Button