import {
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  LOGGING_IN,
} from "../constants/action-types";

const initialState = {
  users: [],
  loggingIn: true,
  errorMessage: "",
};

function loginReducer(state = initialState, action) {
  if (action.type === LOGIN_FAILED) {
    console.log(action.payload);
  }

  if (action.type === LOGIN_SUCCESSFUL) {
    console.log(action.payload);
    return {
      ...state,
      users: action.payload,
    };
  }
  if (action.type === LOGGING_IN) {
    return {
      ...state,
      loggingIn: action.payload,
    };
  }

  return state;
}

export const performingLogin = (bool) => {
  return {
    type: LOGGING_IN,
    payload: bool,
  };
};
export const loginSuccessful = (data) => {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: data,
    loggingIn: false,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
    loggingIn: false,
  };
};

export default loginReducer;
