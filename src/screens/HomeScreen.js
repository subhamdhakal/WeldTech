import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#efefef",
          // backgroundColor: "#b0cac7",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>MIG</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>MIG</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>STICK</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>TIG</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#005086",
    margin: 4,
    padding: 10,
    borderRadius: 2,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
