import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class ScreenChooseMaterial extends Component {
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
          onPress={() =>
            this.props.navigation.navigate("ScreenChooseThickness")
          }
        >
          <Text style={{ color: "white" }}>Aluminium</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() =>
            this.props.navigation.navigate("ScreenChooseThickness")
          }
        >
          <Text style={{ color: "white" }}>Stainless Steel</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() =>
            this.props.navigation.navigate("ScreenChooseThickness")
          }
        >
          <Text style={{ color: "white" }}>Steel</Text>
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
