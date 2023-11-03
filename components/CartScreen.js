import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CartScreen = ({ navigation }) => {
    return (
        <View>
        <Text style={styles.h1}>CartScreen</Text>
        <View style={styles.containerBtn}>
          <TouchableOpacity
            onPress={() => [navigation.navigate("Home")]}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => [navigation.navigate("Contact")]}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
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
export default CartScreen;