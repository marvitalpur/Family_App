import * as React from 'react';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Colors } from '../../assets/theme';


const Inputs = (props) => {
    const [text, setText] = React.useState("");
    return (
        <>
            {props.TextInput1 ? (
                <TextInput
                    keyboardType={props.keyboardType}
                    maxLength={props.maxlength}
                    disabled={props.disabled}
                    activeUnderlineColor="transparent"
                    underlineColor="transparent"
                    selectionColor="#000"
                    secureTextEntry={props.secureTextEntry}
                    theme={{ roundness: props.borderRadius }}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.handleChange}
                    placeholderTextColor={Colors.text.secondary}
                    style={styles.inputs}
                />
            ) : (
                <TextInput
                    keyboardType={props.keyboardType}
                    maxLength={props.maxlength}
                    disabled={props.disabled}
                    activeUnderlineColor="transparent"
                    underlineColor="transparent"
                    selectionColor="#000"
                    secureTextEntry={props.secureTextEntry}
                    theme={{ roundness: props.borderRadius }}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.handleChange}
                    placeholderTextColor={Colors.text.secondary}
                    style={styles.inputs}
                    right={<TextInput.Icon icon="eye" color={props.color} />}


                />
            )}
        </>
    );
};

export default Inputs;