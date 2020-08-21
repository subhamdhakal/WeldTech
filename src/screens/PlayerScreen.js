import React from "react";
import { StyleSheet, View } from "react-native";
import YouTube from "react-native-youtube";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import dataReducer from "./../reducer/dataReducer";

class PlayerScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          videoId={this.props.youtubeId}
          play={true}
          //   fullscreen={true}
          loop={false}
          apiKey={"AIzaSyD3Ejf86Vrr46AyTTTCsDe1rMfElLiMV3Q"}
          onReady={(e) => this.setState({ isReady: true })}
          onChangeState={(e) => this.setState({ status: e.state })}
          onChangeQuality={(e) => this.setState({ quality: e.quality })}
          onError={(e) => this.setState({ error: e.error })}
          style={{ alignSelf: "stretch", height: 300 }}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    youtubeId: state.dataReducer.youTubeVideoId,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(
//       { login, changeDataStatus, loadParticularWeldingData, setPageTitle },
//       dispatch
//     ),
//   };
// }

export default connect(mapStateToProps, null)(PlayerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001B33",
  },
});
