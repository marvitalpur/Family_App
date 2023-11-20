import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { Colors, Fonts } from "../../assets/theme";
import Button from "../Button";
import { CheckIcon, QuestionIcon } from "../../assets/theme/svgimages";
import Images from "../../assets/Images";
const Popup = (props) => {
    return (
        <Modal isVisible={props.isModalVisible}
            backdropOpacity={0.5}
            animationIn={false}
            coverScreen={true}
            style={{}}>
            <View style={{ justifyContent: 'center', color: Colors.background.tertiary, padding: 10 }}>
                <View style={styles.boxView}>
                    <View style={{ marginTop: 10, alignItems: 'center' }} >
                        {props.icon ?
                            (<>
                                {props.icon1 ? <QuestionIcon /> : <CheckIcon />}
                            </>) : (<>
                                <Image source={Images.icons.coin} />
                            </>)
                        }
                    </View>
                    <View style={{ marginTop: 10 }} />
                    <Text style={styles.headtext}>{props.headtext}</Text>
                    <View style={{ marginTop: 10 }} />
                    <Text numberOfLines={3} style={styles.text}>{props.text}</Text>
                    <View style={{ marginTop: 10 }} />
                    <View style={styles.btnView}>
                        {props.btn1 && (
                            <Button button1 btn1 onPress={props.hide} title={props.btntitle1}
                                borderRadius={10}
                            />
                        )}
                        {props.btn2 && (
                            <TouchableOpacity style={styles.btn} onPress={props.btn2}
                                borderRadius={10}>
                                <Text style={styles.btntext}>{props.btntitle2}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({

    boxView: {
        backgroundColor: Colors.background.tertiary,
        borderWidth: 1,
        borderColor: Colors.placeHolderColor,
        height: 325,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center'
    },
    btnView: {
        backgroundColor: Colors.background.tertiary,
        flexDirection: 'row', justifyContent: 'space-around',
        paddingHorizontal: 25

    },
    headtext: {
        textAlign: 'center',
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.secondary,
        paddingHorizontal: 10,
    },
    btn: {
        padding: 10,
        justifyContent: 'center', alignItems: 'center', height: 50,
        borderWidth: 1, borderColor: Colors.placeHolderColor,
        paddingHorizontal: 20, borderRadius: 10

    },
    btntext: {
        fontSize: Fonts.size.xSmall,
        color: Colors.white,
    }
})
export default Popup;