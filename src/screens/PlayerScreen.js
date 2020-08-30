import React, { Component } from "react";
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import YouTube from "react-native-youtube";
import Icon from "react-native-vector-icons/FontAwesome";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadParticularElectrodeData } from "../reducer/dataReducer";
import { setYoutubeVideoId } from "./../reducer/dataReducer";

const apiKey = "AIzaSyD3Ejf86Vrr46AyTTTCsDe1rMfElLiMV3Q";
const channelId = "UCX4aRuKMiD30ofSjpAibbNA";
class PlayerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  // `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date`

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLwL_LDhxUpcDlHu-bkZnhUohcIFduflQM&key=AIzaSyD3Ejf86Vrr46AyTTTCsDe1rMfElLiMV3Q"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(JSON.stringify(res));
        const videoId = [];
        res.items.forEach((item) => {
          videoId.push(item);
        });
        this.setState({
          data: videoId,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.subComponent}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
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
            textBreakStrategy={"simple"}
          >
            {this.props.pageTitle}
          </Text>
        </View>
        <YouTube
          videoId={this.props.youTubeVideoId}
          play={true}
          //   fullscreen={true}
          loop={false}
          apiKey={"AIzaSyD3Ejf86Vrr46AyTTTCsDe1rMfElLiMV3Q"}
          onReady={(e) => this.setState({ isReady: true })}
          onChangeState={(e) => this.setState({ status: e.state })}
          onChangeQuality={(e) => this.setState({ quality: e.quality })}
          onError={(e) => this.setState({ error: e.error })}
          style={{ alignSelf: "stretch", height: 200 }}
        />
        {/* <ScrollView>
          <View style={styles.body}>
            {this.state.data.map((item, i) => (
              <TouchableHighlight
                key={item.id.videoId}
                onPress={() => {
                  this.props.actions.setYoutubeVideoId(item.id.videoId),
                    this.props.navigation.navigate("PlayerScreen");
                }}
              >
                <View style={styles.vids}>
                  <Image
                    source={{ uri: item.snippet.thumbnails.medium.url }}
                    style={{ width: 128, height: 72 }}
                  />
                  <Text textBreakStrategy={"simple"} style={styles.vidText}>
                    {item.snippet.title}
                  </Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView> */}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    youTubeVideoId: state.dataReducer.youTubeVideoId,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setYoutubeVideoId }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B33",
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
  vids: {
    backgroundColor: "#fff",
    borderColor: "#aaa",
    flexDirection: "row",
    padding: 8,
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    margin: 2,
  },
  vidItems: {
    flexDirection: "row",
    padding: 10,
  },
  vidText: {
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    fontSize: 16,
    padding: 8,
    color: "#001B33",
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#fff",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "#bbb",
  },
  tabItems: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
  tabTitle: {
    fontSize: 11,
    color: "#333",
    paddingTop: 4,
    textDecorationLine: "underline",
  },
  subComponent: {
    backgroundColor: "#FEE203",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    paddingBottom: 20,
  },
  bannerTextStyle: {
    fontSize: 14,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001B33",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },
  pickerStyle: {
    marginLeft: 18,
    elevation: 3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
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
  calculateButton: {},
  textCalculate: {},
});
