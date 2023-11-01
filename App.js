import React, {useState} from 'react';

import {StyleSheet, View } from 'react-native';
import Todos from './components/Todos';
const App = () => {


  return (
    <View style={styles.container}>
      <Todos />
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