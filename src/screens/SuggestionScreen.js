import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function TabScreen(props) {
  return (
    <View style={{ paddingBottom: 40 }}>
      <FlatList
        data={props.data["descriptions"]}
        renderItem={({ item, index }) => (
          <View style={styles.subDetail}>
            <Text style={styles.keyText}>{item.title} :</Text>
            <Text style={styles.valueText}>{item.detail}</Text>
            {item.imageUrl == null ? (
              <View />
            ) : (
              <Image
                style={{
                  height: 90,
                  width: 140,
                  resizeMode: "contain",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                source={{
                  uri: item.imageUrl,
                }}
              />
            )}
          </View>
        )}
      />
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
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

class SuggestionScreen extends Component {
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
  renderItem = (item) => (
    <View style={styles.subDetail}>
      <Text style={styles.keyText}>{item.title} :</Text>
      <Text style={styles.valueText}>{item.detail}</Text>
      {item.imageUrl == null ? (
        <View />
      ) : (
        <Image
          style={{
            height: 90,
            width: 140,
            resizeMode: "contain",
            justifyContent: "center",
            alignSelf: "center",
          }}
          source={{
            uri: item.imageUrl,
          }}
        />
      )}
    </View>
  );
  render() {
    return (
      <View style={styles.main}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          {/* <Image
            style={{
              height: this.state.imgHeight,
              width: this.state.imgWidth,
            }}
            source={require("../assets/icons/weldtech-app-top-banner.png")}
          /> */}
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
              {this.props.pageTitle} SUGGESTION
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

        {!this.props.multipleMethods ? (
          <View style={styles.detail}>
            <FlatList
              data={this.props.electrodeMethods[0]["descriptions"]}
              renderItem={({ item, index }) => this.renderItem(item)}
              keyExtractor={(item) => item.id}
            />
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
                All suggested settings are approximate. Welds should be tested
                to comply to your specifications.
              </Text>
            </View>
          </View>
        ) : (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "#001B33",
              inactiveTintColor: "gray",
              indicatorStyle: {
                backgroundColor: "#001B33",
              },

              labelStyle: {
                fontFamily: "HelveticaNowDisplay-Regular",
              },
            }}
          >
            <Tab.Screen
              name={this.props.electrodeMethods[0]["methodName"]}
              children={() => (
                <TabScreen data={this.props.electrodeMethods[0]} />
              )}
            />
            <Tab.Screen
              name={this.props.electrodeMethods[1]["methodName"]}
              children={() => (
                <TabScreen data={this.props.electrodeMethods[1]} />
              )}
            />
          </Tab.Navigator>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    electrodeMethods: state.dataReducer.electrodeMethods,
    multipleMethods: state.dataReducer.multipleMethods,
    pageTitle: state.dataReducer.pageTitle,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionScreen);
const styles = StyleSheet.create({
  main: {
    flex: 1,
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
    justifyContent: "center",
    paddingBottom: 90,
  },
  subDetail: {
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    elevation: 3,
    backgroundColor: "white",
    padding: 8,
  },
  keyText: {
    fontSize: 14,
    fontFamily: "HelveticaNowDisplay-Bold",
    color: "#001B33",
    flexWrap: "wrap",
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
    flexWrap: "wrap",
  },
  tinyText: {
    fontSize: 9,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
  },
  bannerTextStyle: {
    fontSize: 14,
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
    fontSize: 12,
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
