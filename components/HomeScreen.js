//HomeScreen.js

import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.h1}>HomeScreen</Text>
      <View style={styles.containerBtn}>
        {/* <TouchableOpacity style={styles.btn}> */}
          <Text style={styles.textBtn}>Contact Us</Text>
        {/* </TouchableOpacity> */}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "red",
      borderRadius: 50,
      margin: 50,
      padding: 10,
      width: "20%"
  },
  containerBtn: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
  },
  h1: {
      fontSize: 28,
      marginVertical: 25,
      textAlign: "center",
  },
  textBtn: { 
      fontSize: 12 
  },
});

export default HomeScreen;