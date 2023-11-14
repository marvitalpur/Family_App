import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import RootStack from './src/Naviagtion/RookStack'



const App = () => {
  return (
    <>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </>

  )
}

export default App

