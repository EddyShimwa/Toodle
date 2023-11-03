//HomeScreen.js

import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.h1}>HomeScreen</Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          onPress={() => [navigation.navigate("Contact")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Cart")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Todos")]}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Todos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "blue",
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
      fontSize: 12, 
      color: "white",
  },
});

export default HomeScreen;