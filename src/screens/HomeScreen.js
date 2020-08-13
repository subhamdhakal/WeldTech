import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../actions/index";
import { changeDataStatus } from "../reducer/dataReducer";
class HomeScreen extends Component {
  state = {
    imgWidth: 0,
    imgHeight: 0,
  };

  componentDidMount() {
    console.log("App loaded");
    // this.props.actions.login("weldm8-superadmin", "User@123!@#");

    this.props.actions.changeDataStatus();

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
            backgroundColor: "#FEE203",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: this.state.imgHeight, width: this.state.imgWidth }}
            source={require("../assets/icons/weldtech-app-top-banner.png")}
          />
          <Text style={styles.bannerTextStyle}>WELD SETTING CALCULATOR</Text>
          <View style={{ marginTop: 24 }}>
            <View
              style={{
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "space-between",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate("CalculatorScreen")
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 72, width: 65 }}
                    source={require("../assets/icons/stick-welding-icon.png")}
                  />
                  <Text style={styles.textWeldingType} numberOfLines={2}>
                    STICK WELDING
                  </Text>
                  <Icon
                    style={{ marginEnd: 28 }}
                    name="chevron-right"
                    size={18}
                    color="#001B33"
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 11,
                elevation: 10,
                alignContent: "space-around",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate("CalculatorScreen")
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 72, width: 65 }}
                    source={require("../assets/icons/tig-welding-icon.png")}
                  />
                  <Text style={styles.textWeldingType} numberOfLines={2}>
                    TIG WELDING
                  </Text>
                  <Icon name="chevron-right" size={18} color="#001B33" />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{ backgroundColor: "white", marginTop: 11, elevation: 10 }}
            >
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate("CalculatorScreen")
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 72, width: 65 }}
                    source={require("../assets/icons/mig-welding-icon-01.png")}
                  />
                  <Text style={styles.textWeldingType} numberOfLines={2}>
                    MIG (SOLID-WIRE) WELDING
                  </Text>
                  <Icon name="chevron-right" size={18} color="#001B33" />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{ backgroundColor: "white", marginTop: 11, elevation: 10 }}
            >
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate("CalculatorScreen")
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 72, width: 65 }}
                    source={require("../assets/icons/mig-welding-icon-02.png")}
                  />
                  <Text style={styles.textWeldingType} numberOfLines={2}>
                    MIG (FLUX-CORED) WELDING
                  </Text>
                  <Icon name="chevron-right" size={18} color="#001B33" />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { users: state.loginReducer.users };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ login, changeDataStatus }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FEE203",
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  },
  bannerTextStyle: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
  },
  image: {
    width: "100%",
  },
  textWeldingType: {
    fontSize: 16,
    width: 166,
    marginLeft: 36,
    marginRight: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001426",
  },
});
