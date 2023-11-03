import React from "react";
import { IoMdSettings } from "react-icons/io";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { StyleSheet, View } from "react-native";
import Todos from "./components/Todos";
// import HomeScreen from "./components/HomeScreen";
// import CartScreen from "./components/CartScreen";
// import ContactScreen from "./components/ContactScreen";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const App = () => {
  const navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Todos"
        screenOptions={{
          headerBackTitle: "",
          headerShown: true,
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "#fff",
          headerTitle: "My Tasks",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => [navigation.navigate("Contact")]}
              style={styles.settingsBtn}
            >
              <IoMdSettings title="Settings" color="#fff" />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          component={Todos}
          name="Todos"
          options={{ title: "Todos" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  settingsBtn: {
    marginRight: 10,
    fontSize: 20,
  },
});

export default App;
