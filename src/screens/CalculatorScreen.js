import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Picker,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPicker from "./../components/RNModalPicker";
import dataReducer from "./../reducer/dataReducer";
import { connect } from "react-redux";

class CalculatorScreen extends Component {
  state = {
    imgWidth: 0,
    imgHeight: 0,
  };
  constructor(props) {
    super(props);
    this.state = {
      placeHolderTextMaterial: "Please Select Material",
      placeHolderTextElectrode: "Please Select Electrode",
      selectedTextMaterial: "",
      selectedTextElectrode: "",
    };
  }
  _selectedValueMaterial(index, item) {
    this.setState({ selectedTextMaterial: item.name });
  }
  _selectedValueElectrode(index, item) {
    this.setState({ selectedTextElectrode: item.name });
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
            <Text style={styles.bannerTextStyle} numberOfLines={2}>
              STICK WELDING CALCULATOR
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
                  dataSource={this.props.data["materials"]}
                  dummyDataSource={this.props.data["materials"]}
                  defaultValue={false}
                  pickerTitle={"Select Material"}
                  showSearchBar={true}
                  disablePicker={false}
                  changeAnimation={"none"}
                  searchBarPlaceHolder={"Search"}
                  showPickerTitle={true}
                  // searchBarContainerStyle={this.props.searchBarContainerStyle}
                  // pickerStyle={styles.pickerStyle}
                  // pickerItemTextStyle={Styles.listTextViewStyle}
                  selectedLabel={this.state.selectedTextMaterial}
                  placeHolderLabel={this.state.placeHolderTextMaterial}
                  // selectLabelTextStyle={Styles.selectLabelTextStyle}
                  // placeHolderTextStyle={Styles.placeHolderTextStyle}
                  // dropDownImageStyle={Styles.dropDownImageStyle}
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
                  dataSource={this.props.data["materials"][0]["electrodes"]}
                  dummyDataSource={
                    this.props.data["materials"][0]["electrodes"]
                  }
                  defaultValue={false}
                  pickerTitle={"Select Electrode"}
                  showSearchBar={true}
                  disablePicker={false}
                  changeAnimation={"none"}
                  searchBarPlaceHolder={"Search"}
                  showPickerTitle={true}
                  // searchBarContainerStyle={this.props.searchBarContainerStyle}
                  // pickerStyle={styles.pickerStyle}
                  // pickerItemTextStyle={Styles.listTextViewStyle}
                  selectedLabel={this.state.selectedTextElectrode}
                  placeHolderLabel={this.state.placeHolderTextElectrode}
                  // selectLabelTextStyle={Styles.selectLabelTextStyle}
                  // placeHolderTextStyle={Styles.placeHolderTextStyle}
                  // dropDownImageStyle={Styles.dropDownImageStyle}
                  dropDownImage={require("../assets/icons/ic_drop_down.png")}
                  selectedValue={(index, item) =>
                    this._selectedValueElectrode(index, item)
                  }
                />
              </View>
            </View>
          </View>

          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("SuggestionScreen")}
          >
            <View style={styles.calculateButton}>
              <Text style={styles.textCalculate}>CALCULATE</Text>
              <Icon name="chevron-right" size={18} color="#001B33" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.dataReducer.materialArray };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ menuItemClicked }, dispatch),
//   };
// }

export default connect(mapStateToProps, null)(CalculatorScreen);

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
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 20,
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
    width: 166,
    marginLeft: 36,
    marginRight: 18,
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    color: "#001426",
  },
  backText: {
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    fontSize: 18,
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
  calculateButton: {
    flexDirection: "row",
    backgroundColor: "#FEE203",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    width: 265,
  },
  textCalculate: {
    fontFamily: "HelveticaNowDisplay-ExtraBold",
    fontSize: 16,
    color: "#001B33",
    padding: 4,
  },
});
