import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

const Loader = () => {
    // const spinner = useSele


    return (
        <View>
            <Spinner
                visible
                textContent={Spinner?.text || ''}
                textStyle={styles.Spinnertext}
            />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})