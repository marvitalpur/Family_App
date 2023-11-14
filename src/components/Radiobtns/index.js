import React, { useState } from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';
import { RadioButton, } from 'react-native-paper';
import { Colors } from '../../assets/theme';
import styles from './styles';
import { Doc, LockIcon, } from '../../assets/theme/svgimages';



const Radiobtns = (props) => {
    const [value, setValue] = useState('Easy');
    const [color, setColor] = useState(false)
    const { checked, setChecked, onPressbtn } = props
    return (
        <>
            {props.radiobtn1 ? (
                <TouchableOpacity onPress={onPressbtn} style={styles.boxView}>
                    {props.btn ?
                        (<RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked)}
                            color={setColor === true ? Colors.text.tertiary : Colors.text.secondary}
                        />) : (
                            <View style={{ padding: 2, borderRadius: 15, backgroundColor: Colors.text.tertiary }}>
                                <LockIcon />
                            </View>
                        )}

                    <Text style={styles.placeholdertext}>
                        Start your day by waking up at the same
                    </Text>
                </TouchableOpacity>) : (
                <>
                    <View style={{
                        flexDirection: props.flexDirection,
                        justifyContent: 'space-between',
                        paddingHorizontal: 5
                    }}>
                        <TouchableOpacity onPress={onPressbtn} style={{
                            paddingHorizontal: 10,
                            height: 46,
                            flexDirection: 'row', alignItems: 'center',
                            borderColor: Colors.white, borderRadius: 10,
                            backgroundColor: props.backgroundColor, borderWidth: props.borderWidth
                        }}>
                            {props.btn ?
                                (
                                    <View style={{ padding: 1, borderRadius: 15, backgroundColor: Colors.text.tertiary }}>
                                        <LockIcon />
                                    </View>
                                ) :
                                (<RadioButton
                                    value="Easy"
                                    status={value === 'Easy' ? 'checked' : 'unchecked'}
                                    onPress={() => setValue('Easy')}
                                    color={setColor === true ? Colors.primary : Colors.text.quaternary}
                                />)
                            }
                            <Text style={{ color: setColor === true ? Colors.white : Colors.placeHolderColor, paddingLeft: 15 }}>{props.Easy}</Text>
                        </TouchableOpacity>
                        <View style={{ paddingTop: 10 }} />
                        <TouchableOpacity onPress={onPressbtn} style={{
                            paddingHorizontal: 10,
                            height: 46,
                            flexDirection: 'row', alignItems: 'center',
                            borderColor: Colors.white, borderRadius: 10,
                            backgroundColor: props.backgroundColor, borderWidth: props.borderWidth
                        }}>
                            {props.btn ?
                                (<View style={{ padding: 1, borderRadius: 25, backgroundColor: Colors.text.tertiary }}>
                                    <LockIcon />
                                </View>
                                ) :
                                (<RadioButton
                                    value="Medium"
                                    status={value === 'Medium' ? 'checked' : 'unchecked'}
                                    onPress={() => setValue('Medium')}
                                    color={setColor === true ? Colors.white : Colors.gray11}
                                />)

                            }
                            <Text
                                style={{ color: setColor === true ? Colors.white : Colors.gray11, paddingLeft: 15 }}>{props.Medium}</Text>
                        </TouchableOpacity>
                        {props.thirdbtn && (<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Hard"  // Change the value to 'third'
                                status={value === 'Hard' ? 'checked' : 'unchecked'}
                                onPress={() => setValue('Hard')}
                                color={setColor === true ? Colors.text.secondary : Colors.text.tertiary}   // Change the value to 'third'
                            />
                            <Text style={{ color: setColor === true ? Colors.white : Colors.gray11 }}>{props.Second}</Text>
                        </View>)}

                    </View>
                </>
            )
            }


        </>


    );
};

export default Radiobtns;
