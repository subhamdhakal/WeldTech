import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Icons from "react-native-vector-icons/FontAwesome";
import FacebookScreen from "./src/screens/FacebookScreen";
import YoutubeScreen from "./src/screens/YoutubeScreen";
import TwitterScreen from "./src/screens/TwitterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenChooseMaterial from "./src/screens/ScreenChooseMaterial";
import ScreenChooseThickness from "./src/screens/ScreenChooseThickness";
import { render } from "react-dom";
import DetailScreen from "./src/screens/DetailScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="WeldingCalculators" component={HomeScreen} />
      <HomeStack.Screen
        name="ScreenChooseMaterial"
        component={ScreenChooseMaterial}
      />
      <HomeStack.Screen
        name="ScreenChooseThickness"
        component={ScreenChooseThickness}
      />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Youtube") {
              iconName = focused ? "youtube" : "youtube";
            } else if (route.name === "Facebook") {
              iconName = focused ? "facebook-square" : "facebook-square";
            } else if (route.name === "Twitter") {
              iconName = focused ? "twitter-square" : "twitter-square";
            }

            return <Icons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Youtube" component={YoutubeScreen} />
        <Tab.Screen name="Facebook" component={FacebookScreen} />
        <Tab.Screen name="Twitter" component={TwitterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
