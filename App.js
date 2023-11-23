import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import MyStore from './src/redux/MyStore';
import RootStack from './src/Naviagtion/RootStack';

const App = () => {
  return (
    <>
      <Provider store={MyStore} >
        <PaperProvider>
          <RootStack />
        </PaperProvider>
      </Provider>
    </>

  )
}
export default App

