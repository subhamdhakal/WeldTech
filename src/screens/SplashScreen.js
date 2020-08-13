import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../actions/index";
import * as Progress from "react-native-progress";
import { StackActions } from "@react-navigation/native";

class SplashScreen extends Component {
  componentDidMount() {
    this.props.actions.login("weldm8-superadmin", "User@123!@#");
    let source = Image.resolveAssetSource(
      require("../assets/images/weldtech-splash-screen.jpg")
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
    this.props.dataStatus
      ? this.props.navigation.dispatch(StackActions.replace("HomeScreen"))
      : console.log("false cha");
    return (
      <View style={styles.main}>
        <ImageBackground
          style={{ flex: 1, width: "100%" }}
          resizeMethod={"resize"}
          resizeMode={"cover"}
          source={require("../assets/images/weldtech-splash-screen.jpg")}
        >
          <View>
            <Progress.Bar
              indeterminate={true}
              width={null}
              height={10}
              color={"#FEE203"}
            />
          </View>
        </ImageBackground>
        <Image />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataStatus: state.dataReducer.dataStatus };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ login }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  detail: {
    flexDirection: "column",
    width: "96%",
    alignItems: "center",
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
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
  },
  valueTextNoWidth: {
    fontSize: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    textAlign: "center",
  },
  valueText: {
    fontSize: 18,
    width: 200,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    textAlign: "center",
  },
  tinyText: {
    fontSize: 9,
    width: 200,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
  },
  bannerTextStyle: {
    fontSize: 18,
    width: 200,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },
  textWeldingType: {
    fontSize: 16,
    width: 166,
    marginLeft: 36,
    marginRight: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001426",
  },
  backText: {
    fontFamily: "HelveticaNowDisplay-ExtraBold",
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
