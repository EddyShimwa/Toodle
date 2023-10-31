import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
const App = () => {
  return (
    <View style={styles.container}>
           <View style={styles.taskWrapper}>
             <Text style={styles.sectionTitle}>Today's tasks</Text>
             <View styles={styles.items}>
             <Task text={"i am text one"} />
              <Task text={"i am text two"} />
            </View>
           </View>

           //
   
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  
  },
  taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  items: { 
    marginTop: 30,
  }
})

export default App