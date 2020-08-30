import React, { Component } from "react";
import {
  Share,
  Button,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  Text,
} from "react-native";

export default class ShareApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgWidth: 0,
      imgHeight: 0,
    };
  }
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
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "https://play.google.com/store/apps/details?id=com.weldm8mobile",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#FEE203",
          flex: 1,
          alignItems: "center",
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
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              alignItems: "center",
              margin: 12,
              height: 200,
              width: 200,
            }}
            source={require("../assets/weldtech-icon.png")}
          />
          <TouchableHighlight
            style={{ backgroundColor: "#0E6BBF", padding: 12, borderRadius: 8 }}
            onPress={this.onShare}
          >
            <Text style={{ color: "white" }}>Share this app</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
