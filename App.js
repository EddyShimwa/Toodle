import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {StyleSheet, View } from 'react-native';
import Todos from './components/Todos';
import HomeScreen from './components/HomeScreen';

const App = () => {


  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
      {/* <Todos /> */}
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  }
})

export default App;