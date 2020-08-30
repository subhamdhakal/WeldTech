import React, { Component } from "react";
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import YouTube from "react-native-youtube";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadParticularElectrodeData } from "../reducer/dataReducer";
import { setYoutubeVideoId } from "./../reducer/dataReducer";
import NetInfo from "@react-native-community/netinfo";

const apiKey = "AIzaSyD3Ejf86Vrr46AyTTTCsDe1rMfElLiMV3Q";
const channelId = "UCX4aRuKMiD30ofSjpAibbNA";
class YouTubeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      internetStatus: true,
    };
    this.unsubscribe = NetInfo.addEventListener((state) => {
      this.setState({
        internetStatus: state.isInternetReachable,
      });
      state.isInternetReachable
        ? fetch(
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
                internetStatus: true,
              });
            })
            .catch((error) => {
              console.error(error);
            })
        : this.setState({
            internetStatus: false,
          });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.internetStatus ? (
          <ScrollView>
            <View style={styles.body}>
              {this.state.data.map((item, i) => (
                <TouchableHighlight
                  key={item.videoId}
                  onPress={() => {
                    this.props.actions.setYoutubeVideoId(
                      item.contentDetails.videoId
                    ),
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
          </ScrollView>
        ) : (
          <View
            style={{
              backgroundColor: "#BF0E0E",
              width: "100%",
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
              No internet connection
            </Text>
          </View>
        )}
      </View>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     syncDate: state.dataReducer.syncDate,
//     data: state.dataReducer.data,
//   };
// };

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setYoutubeVideoId }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(YouTubeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
