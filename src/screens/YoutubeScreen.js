import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class YoutubeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#b0cac7",
        }}
      >
        <Text style={{ fontSize: 24 }}>Youtube Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#318fb5",
    margin: 40,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});
