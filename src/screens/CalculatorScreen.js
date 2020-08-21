import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Picker,
  ScrollView,
} from "react-native";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPicker from "./../components/RNModalPicker";
import dataReducer from "./../reducer/dataReducer";
import { connect } from "react-redux";
import { loadParticularElectrodeData } from "../reducer/dataReducer";

class CalculatorScreen extends Component {
  state = {
    imgWidth: 0,
    imgHeight: 0,
  };
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

    this.state = {
      placeHolderTextMaterial: "Please Select Material",
      placeHolderTextElectrode: "Please Select Electrode",
      selectedTextMaterial: "Please Select Material",
      selectedTextElectrode: "Please Select Electrode",
      calculateButtonEnabled: false,
      warningTextStatus: false,
    };
  }
  checkCalculateButtonState() {}
  forceUpdateHandler() {
    this.forceUpdate();
  }
  _selectedValueMaterial(index, item) {
    this.setState({ selectedTextMaterial: item.name });
    this.setState({
      selectedTextElectrode: "Please Select Electrode",
      placeHolderTextElectrode: "Please Select Electrode",
    });
    this.forceUpdateHandler;
    this.props.actions.loadParticularElectrodeData(item.electrodes);
  }
  _selectedValueElectrode(index, item) {
    this.setState({
      selectedTextElectrode: item.name,
    });
    this.enableWarningText(false);
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
  enableWarningText(status) {
    this.setState({
      enableWarningText: status,
    });
  }
  render() {
    return (
      <View style={styles.main}>
        <View
          style={{
            alignItems: "center",
            flex: 1,
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
              textBreakStrategy={"simple"}
            >
              {this.props.pageTitle}
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
          <Image source={require("../assets/icons/arrow-down.png")} />

          <View
            style={{
              padding: 31,
              width: "100%",
            }}
          >
            <View style={{}}>
              <Text style={styles.backText}>
                What material are you welding?
              </Text>
              <View
                style={{
                  marginTop: 14,
                  width: "100%",
                  marginBottom: 18,
                }}
              >
                <RNPicker
                  dataSource={this.props.materialArray}
                  dummyDataSource={this.props.materialArray}
                  defaultValue={false}
                  pickerTitle={"Select Material"}
                  showSearchBar={true}
                  disablePicker={false}
                  changeAnimation={"fade"}
                  searchBarPlaceHolder={"Search"}
                  showPickerTitle={true}
                  placeHolderLabel={this.state.placeHolderTextMaterial}
                  selectedLabel={this.state.selectedTextMaterial}
                  dropDownImage={require("../assets/icons/ic_drop_down.png")}
                  selectedValue={(index, item) =>
                    this._selectedValueMaterial(index, item)
                  }
                />
              </View>
            </View>
            <View>
              <Text style={styles.backText}>What electrode are you using?</Text>
              <View
                style={{
                  marginTop: 14,
                  width: "100%",
                }}
              >
                <RNPicker
                  dataSource={this.props.electrodeArray}
                  dummyDataSource={this.props.electrodeArray}
                  defaultValue={false}
                  pickerTitle={"Select Electrode"}
                  showSearchBar={true}
                  disablePicker={false}
                  searchBarPlaceHolder={"Search"}
                  showPickerTitle={true}
                  changeAnimation={"fade"}
                  placeHolderLabel={this.state.placeHolderTextElectrode}
                  selectedLabel={this.state.selectedTextElectrode}
                  dropDownImage={require("../assets/icons/ic_drop_down.png")}
                  selectedValue={(index, item) =>
                    this._selectedValueElectrode(index, item)
                  }
                />
              </View>
            </View>
          </View>

          {this.state.enableWarningText ? (
            <Text
              style={{
                color: "red",
                fontFamily: "HelveticaNowDisplay-ExtraBold",
                fontSize: 10,
              }}
            >
              * Please select both welding type and electorde type
            </Text>
          ) : (
            <Text
              style={{
                color: "red",
                fontFamily: "HelveticaNowDisplay-ExtraBold",
                fontSize: 10,
              }}
            />
          )}

          <TouchableWithoutFeedback
            // disabled={
            //   this.state.selectedTextElectrode.trim() == "" ||
            //   this.state.selectedTextMaterial.trim() == "" ||
            //   this.state.selectedTextElectrode === "Please Select Electrode"
            // }
            onPress={() =>
              this.state.selectedTextElectrode.trim() == "" ||
              this.state.selectedTextMaterial.trim() == "" ||
              this.state.selectedTextElectrode === "Please Select Electrode"
                ? this.enableWarningText(true)
                : this.props.navigation.navigate("SuggestionScreen")
            }
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor:
                  this.state.selectedTextElectrode.trim() == "" ||
                  this.state.selectedTextMaterial.trim() == "" ||
                  this.state.selectedTextElectrode === "Please Select Electrode"
                    ? "#D3D3D3"
                    : "#FEE203",
                alignItems: "center",
                justifyContent: "center",
                padding: 18,
                width: 265,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNowDisplay-ExtraBold",
                  fontSize: 16,
                  color:
                    this.state.selectedTextElectrode.trim() == "" ||
                    this.state.selectedTextMaterial.trim() == "" ||
                    this.state.selectedTextElectrode ===
                      "Please Select Electrode"
                      ? "#FFF"
                      : "#001426",
                  padding: 4,
                }}
              >
                CALCULATE
              </Text>
              <Icon
                name="chevron-right"
                size={18}
                color={
                  this.state.selectedTextElectrode.trim() == "" ||
                  this.state.selectedTextMaterial.trim() == "" ||
                  this.state.selectedTextElectrode === "Please Select Electrode"
                    ? "#FFF"
                    : "#001426"
                }
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    electrodeArray: state.dataReducer.electrodeArray,
    materialArray: state.dataReducer.materialArray,
    pageTitle: state.dataReducer.pageTitle,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadParticularElectrodeData }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
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
