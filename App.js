import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper';
import StackNavigator from './src/Naviagtion/stack';



const App = () => {
  return (
    <>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    </>

  )
}

export default App

