import {
  DATA_LOADED,
  TOGGLE_DATA_STATUS,
  DATE_LOADED,
  LOAD_PARTICULAR_WELDING_DATA,
  LOAD_PARTICULAR_ELECTRODE_DATA,
  SET_PAGE_TITLE,
  SET_YOUTUBE_VIDEO_ID,
} from "../constants/action-types";

const initialState = {
  data: [""],
  dataStatus: false,
  errorMessage: "",
  itemData: [""],
  materialArray: [""],
  electrodeArray: [""],
  syncDate: "",
  pageTitle: "",
  youTubeVideoId: "",
  isDataAvailable: false,
  justFetched: false,
};

function dataReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    // console.log("data in data reducer" + action.payload);
    return {
      ...state,
      data: action.payload,
      isDataAvailable: true,
      dataStatus: true,
      justFetched: true,
    };
  }
  if (action.type === TOGGLE_DATA_STATUS) {
    // console.log("data in data reducer" + action.payload);
    return {
      ...state,
      dataStatus: action.payload,
      justFetched: false,
    };
  }
  if (action.type === DATE_LOADED) {
    console.log("date in case" + action.payload);
    return {
      ...state,
      syncDate: action.payload,
    };
  }
  if (action.type === LOAD_PARTICULAR_WELDING_DATA) {
    return {
      ...state,
      materialArray: action.payload["materials"],
    };
  }
  if (action.type === LOAD_PARTICULAR_ELECTRODE_DATA) {
    return {
      ...state,
      electrodeArray: action.payload,
    };
  }
  if (action.type === SET_PAGE_TITLE) {
    return {
      ...state,
      pageTitle: action.payload,
    };
  }
  if (action.type === SET_YOUTUBE_VIDEO_ID) {
    return {
      ...state,
      youTubeVideoId: action.payload,
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

export const loadParticularWeldingData = (particularData) => {
  return {
    type: LOAD_PARTICULAR_WELDING_DATA,
    payload: particularData,
  };
};
export const loadParticularElectrodeData = (electrodeArray) => {
  return {
    type: LOAD_PARTICULAR_ELECTRODE_DATA,
    payload: electrodeArray,
  };
};
export const setPageTitle = (title) => {
  return {
    type: SET_PAGE_TITLE,
    payload: title,
  };
};
export const putDate = (date) => {
  return {
    type: DATE_LOADED,
    payload: date,
  };
};

export const changeDataStatus = () => {
  return {
    type: TOGGLE_DATA_STATUS,
    payload: false,
  };
};

export const setYoutubeVideoId = (videoId) => {
  return {
    type: SET_YOUTUBE_VIDEO_ID,
    payload: videoId,
  };
};

export default dataReducer;
