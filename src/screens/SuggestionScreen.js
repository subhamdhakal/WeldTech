import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function HomeScreen() {
  return (
    <ScrollView style={styles.detail}>
      <View style={styles.subDetail}>
        <Text style={styles.keyText}>Suggested Temperature range:</Text>
        <Text style={styles.valueText}>130-175</Text>
      </View>
      <View style={{ width: "96%" }}></View>
      <View style={{ flexDirection: "row", width: "96%", marginTop: 8 }}>
        <View
          style={{
            flex: 0.6,
            padding: 18,
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "black",
            shadowOpacity: 1,
            marginTop: 8,
            elevation: 3,
            backgroundColor: "white",
            margin: 2,
          }}
        >
          <View style={{}}>
            <Text style={styles.keyText}>Polarity:</Text>
            <Text style={styles.valueTextNoWidth}>AC/DCEP</Text>
          </View>
          <View>
            <Text style={styles.keyText}>AC</Text>
            <Text style={styles.tinyText}>
              medium weld penetration (can be more spatter)
            </Text>
          </View>
          <View>
            <Text style={styles.keyText}>DCEN</Text>
            <Text style={styles.tinyText}>
              DC, Electrode Negative (straight polarity) has the least weld
              penetration
            </Text>
          </View>
          <View>
            <Text style={styles.keyText}>DCEN</Text>
            <Text style={styles.tinyText}>
              DC, Electrode Negative (straight polarity) has the least weldst
              penetration
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            padding: 18,
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "black",
            shadowOpacity: 1,
            marginTop: 8,
            elevation: 3,
            backgroundColor: "white",
            margin: 2,
          }}
        >
          <View>
            <Text style={styles.keyText}>DCEN</Text>
            <Text style={styles.tinyText} numberOfLines={2}>
              DC, Electrode Negative
            </Text>
          </View>
          <View>
            <Text style={styles.keyText}>DCEN</Text>
            <Text style={styles.tinyText}>
              DC, Electrode Negative DC, Electrode Negative DC, Electrode
              Negative
            </Text>
          </View>
          <View>
            <Text style={styles.keyText}>DCEN</Text>
            <Text style={styles.tinyText}>DC, Electrode Negative</Text>
          </View>
          <View>
            <Text style={styles.keyText}>DCEN</Text>
            <Text style={styles.tinyText}>DC, Electrode Negative</Text>
          </View>
        </View>
      </View>
      <View style={styles.subDetail}>
        <Text style={styles.keyText}>Suggested Temperature range:</Text>
        <Text style={styles.valueText}>130-175</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "HelveticaNowDisplay-Regular",
            fontSize: 10,
          }}
        >
          All suggested settings are approximate. Welds should be tested to
          comply to your specifications.
        </Text>
      </View>
    </ScrollView>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

export default class SuggestionScreen extends Component {
  state = {
    imgWidth: 0,
    imgHeight: 0,
  };

  componentDidMount() {
    let source = Image.resolveAssetSource(
      require("../assets/icons/weldtech-app-top-banner.png")
    );

    const screenWidth = Dimensions.get("window").width;
    const scaleFactor = source.width / screenWidth;
    const imageHeight = source.height / scaleFactor;
    this.setState({
      imgWidth: screenWidth,
      imgHeight: imageHeight,
    });
  }
  render() {
    return (
      <View style={styles.main}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: this.state.imgHeight,
              width: this.state.imgWidth,
            }}
            source={require("../assets/icons/weldtech-app-top-banner.png")}
          />
          <View style={styles.subComponent}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.pop()}
            >
              <View style={styles.backTouchable}>
                <Icon
                  style={{ marginEnd: 4 }}
                  name="chevron-left"
                  size={18}
                  color="#001B33"
                />
                <Text style={styles.backText}>Back</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={styles.bannerTextStyle}
              numberOfLines={3}
              textBreakStrategy="simple"
            >
              STICK WELDING SUGGESTION
            </Text>
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("HomeScreen")}
              >
                <Image
                  style={styles.homeImage}
                  source={require("../assets/icons/home-icon.png")}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <Tab.Navigator>
          <Tab.Screen
            name="Homehbaschjbascbbsacjhsabchajnaskjcnbasjkcb"
            component={HomeScreen}
          />
          <Tab.Screen
            name="Settingsab sjchbabscjhasbcjhasbcjknaskjnjasbchj"
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "center",
  },
  subComponent: {
    backgroundColor: "#FEE203",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 20,
  },
  detail: {
    flexDirection: "column",
    width: "96%",
  },
  subDetail: {
    elevation: 10,
    alignItems: "center",
    padding: 13,
    width: "96%",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    marginTop: 8,
    elevation: 3,
    backgroundColor: "white",
  },
  keyText: {
    fontSize: 14,
    fontFamily: "HelveticaNowDisplay-Bold",
    color: "#001B33",
  },
  valueTextNoWidth: {
    fontSize: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
  },
  valueText: {
    fontSize: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    textAlign: "center",
  },
  tinyText: {
    fontSize: 9,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
  },
  bannerTextStyle: {
    fontSize: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    textAlign: "center",
    width: 200,
  },
  image: {
    width: "100%",
    height: 150,
  },
  textWeldingType: {
    fontSize: 16,
    marginLeft: 36,
    marginRight: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001426",
  },
  backText: {
    fontFamily: "HelveticaNowDisplay-Regular",
    fontSize: 14,
    color: "#001B33",
  },
  backTouchable: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeImage: {
    height: 28,
    width: 37,
  },
});
