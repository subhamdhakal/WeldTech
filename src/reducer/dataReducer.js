import { DATA_LOADED, TOGGLE_DATA_STATUS } from "../constants/action-types";

const initialState = {
  data: [],
  dataStatus: false,
  errorMessage: "",
  materialArray: [],
};

function dataReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    // console.log("data in data reducer" + action.payload);
    return {
      ...state,
      data: action.payload,
      dataStatus: true,
      materialArray: action.payload[1],
    };
  }
  if (action.type === TOGGLE_DATA_STATUS) {
    // console.log("data in data reducer" + action.payload);
    return {
      ...state,
      dataStatus: action.payload,
    };
  }

  return state;
}

export const dataAvailable = (data) => {
  console.log("yeta ayo");
  return {
    type: DATA_LOADED,
    payload: data,
  };
};

export const changeDataStatus = () => {
  return {
    type: TOGGLE_DATA_STATUS,
    payload: false,
  };
};

export default dataReducer;
