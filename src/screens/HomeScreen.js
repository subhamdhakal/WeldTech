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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../actions/index";
import {
  changeDataStatus,
  loadParticularWeldingData,
  setPageTitle,
} from "../reducer/dataReducer";
import { FlatList } from "react-native-gesture-handler";
// import NetInfo from "@react-native-community/netinfo";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgWidth: 0,
      imgHeight: 0,
    };
    // this.unsubscribe = NetInfo.addEventListener((state) => {
    //   if (!this.props.justFetched) {
    //     state.isInternetReachable
    //       ? this.props.actions.login("weldm8-superadmin", "User@123!@#")
    //       : console.log("no internet in homescreen");
    //   }
    // });
  }
  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

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

  renderItem = (item) => (
    <View
      style={{
        backgroundColor: "white",
        elevation: 10,
        justifyContent: "space-between",
        marginStart: 16,
        marginEnd: 16,
        marginTop: 15,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.actions.setPageTitle(item["name"]);
          this.props.actions.loadParticularWeldingData(item),
            this.props.navigation.navigate("CalculatorScreen");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ height: 102, width: 95 }}
            source={{
              uri: item["imageUrl"],
            }}
          />
          <Text style={styles.textWeldingType} numberOfLines={3}>
            {item["name"]}
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
  );
  render() {
    return (
      <View style={styles.main}>
        <View
          style={{
            backgroundColor: "#FEE203",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: this.state.imgHeight,
              width: this.state.imgWidth,
              alignItems: "center",
            }}
            source={require("../assets/icons/weldtech-app-top-banner.png")}
          />
          <View
            style={{
              backgroundColor: "#0E6BBF",
              width: this.state.imgWidth,
              justifyContent: "center",
              alignItems: "center",
              height: 25,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "HelveticaNowDisplay-Regular",
                fontSize: 12,
              }}
            >
              Last synced: {this.props.syncDate}
            </Text>
          </View>
          <Text style={styles.bannerTextStyle}>WELD SETTING CALCULATOR</Text>
        </View>
        <FlatList
          data={this.props.data}
          renderItem={({ item, index }) => this.renderItem(item)}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    syncDate: state.dataReducer.syncDate,
    data: state.dataReducer.data,
    justFetched: state.dataReducer.justFetched,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login, changeDataStatus, loadParticularWeldingData, setPageTitle },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FEE203",
    flex: 1,
  },
  bannerTextStyle: {
    marginTop: 14,
    fontSize: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    alignSelf: "center",
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
