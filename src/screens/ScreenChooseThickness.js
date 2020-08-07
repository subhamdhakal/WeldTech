import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class ScreenChooseThickness extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // backgroundColor: "#b0cac7",
          backgroundColor: "#efefef",
        }}
      >
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={styles.buttonText}>1/2" and Up (12.7 mm) </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={styles.buttonText}>1/4" (6.4 mm)</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={styles.buttonText}>1/8" (3.2 mm)</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={styles.buttonText}>3/16" (4.8 mm)</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#005086",
    borderRadius: 4,
    width: 250,
    marginBottom: 5,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
