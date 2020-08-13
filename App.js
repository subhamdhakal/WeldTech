import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Icons from "react-native-vector-icons/FontAwesome";
import FacebookScreen from "./src/screens/FacebookScreen";
import YoutubeScreen from "./src/screens/YoutubeScreen";
import TwitterScreen from "./src/screens/TwitterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import ScreenChooseThickness from "./src/screens/ScreenChooseThickness";
import { render } from "react-dom";
import SuggestionScreen from "./src/screens/SuggestionScreen";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "../WeldM8/src/store/store";
import SplashScreen from "./src/screens/SplashScreen";

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

function TabNavigationScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("./src/assets/icons/home-icon.png")
              : require("./src/assets/icons/Home-inactive-icon.png");
          } else if (route.name === "Videos") {
            iconName = focused
              ? require("./src/assets/icons/videos-active-icon.png")
              : require("./src/assets/icons/videos-icon.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("./src/assets/icons/settings-active-icon.png")
              : require("./src/assets/icons/settings-icon.png");
          } else if (route.name === "Share") {
            iconName = focused
              ? require("./src/assets/icons/share-active-icon.png")
              : require("./src/assets/icons/share-icon.png");
          }

          return (
            <Image
              width={37}
              height={28}
              resizeMode={"contain"}
              resizeMethod={"auto"}
              style={{ height: 28, width: 37 }}
              source={iconName}
            ></Image>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#001B33",
        inactiveTintColor: "gray",
        style: { height: 70 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Videos" component={YoutubeScreen} />
      <Tab.Screen name="Settings" component={FacebookScreen} />
      <Tab.Screen name="Share" component={TwitterScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <MainStack.Screen name="SplashScreen" component={SplashScreen} />

            <MainStack.Screen
              name="HomeScreen"
              component={TabNavigationScreens}
            />
            <MainStack.Screen
              name="CalculatorScreen"
              component={CalculatorScreen}
            />
            <MainStack.Screen
              name="SuggestionScreen"
              component={SuggestionScreen}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
