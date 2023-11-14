import { Text, View, Image } from 'react-native'
import React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import Images from '../../assets/Images';
import { BAckICon, DimondIcon, DrawerIcon, FireICon } from '../../assets/theme/svgimages';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Fonts } from '../../assets/theme';

const Header = (props) => {
    return (
        <>
            {props.header ? (
                <View style={[styles.container, {
                    backgroundColor: props.backgroundColor,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                }]}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={props.onPress1}>
                        <BAckICon />
                        <Text style={{
                            paddingLeft: 10, color: Colors.text.tertiary,
                            fontSize: Fonts.size.small
                        }}>{props.back}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={props.onPress2}>
                        <Icon name={props.Iconname}
                            size={18} color={props.Icolor} style={{ padding: 2 }} />
                        <Text style={{ color: props.color, paddingHorizontal: 4 }}>
                            {props.headtitle}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.homeHeader}>
                    <TouchableOpacity onPress={props.onPress}
                    >
                        {props.backIcon1 ? <DrawerIcon /> : props.backIcon ? <BAckICon /> : <DrawerIcon />}
                    </TouchableOpacity>
                    <View style={styles.iconsRowView}>
                        <DimondIcon />
                        <Text style={styles.counttext}>145 Pts</Text>
                        <View style={styles.boderView} />
                        <FireICon />
                        <Text style={styles.counttext}>145 Pts</Text>
                        <View style={styles.boderView} />
                        <TouchableOpacity onPress={props.imgPress}>
                            <Image source={props.image}
                                resizeMode='contain'
                                style={styles.img} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default Header

