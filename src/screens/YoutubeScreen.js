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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadParticularElectrodeData } from "../reducer/dataReducer";
import { setYoutubeVideoId } from "./../reducer/dataReducer";

const apiKey = "AIzaSyD3Ejf86Vrr46AyTTTCsDe1rMfElLiMV3Q";
const channelId = "UCX4aRuKMiD30ofSjpAibbNA";
class YouTubeScreen extends Component {
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
        <ScrollView>
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
                    style={{ width: 320, height: 180 }}
                  />
                  <View style={styles.vidItems}>
                    {/* <Image
                      source={require("./images/NightKing.jpg")}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 5,
                      }}
                    /> */}
                    <Text style={styles.vidText}>{item.snippet.title}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
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
    alignItems: "center",
    padding: 30,
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderBottomWidth: 0.6,
    borderColor: "#aaa",
  },
  vidItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  vidText: {
    padding: 20,
    fontFamily: "HelveticaNowDisplay-Regular",
    fontSize: 14,
    color: "#001B33",
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
