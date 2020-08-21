import axios from "react-native-axios";
import { API_URL } from "../config";
import {
  performingLogin,
  loginSuccessful,
  loginFailed,
} from "../reducer/loginReducer";
import { dataAvailable, putDate } from "../reducer/dataReducer";

export const callPostsApi = (token) => {
  return axios
    .get("https://welm8api.azurewebsites.net/api/categories/getcategories", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // console.log("khali", response.data);
      return response;
    })
    .catch((err) => console.log(err));
};

export const login = (username, password, rememberMe = false) => {
  console.log("login pressed");
  const startTime = new Date().getTime();

  return (dispatch) => {
    dispatch(performingLogin(true));
    axios
      .post(`${API_URL}account/login`, {
        username,
        password,
        rememberMe,
      })
      .then((response) => {
        console.log(response.data);

        return callPostsApi(response.data).then(
          (response) => {
            // console.log("khali chaina aba", response.data);
            const endTime = new Date().getTime();
            const runtime = endTime - startTime;
            // var time = new Date().getTime();
            var date = new Date();
            console.log("run time ################# " + date.toString());
            dispatch(putDate(date.toLocaleString("en-US")));
            dispatch(dataAvailable(response.data));
            // Reducers may handle this to show the data and reset isFetching
          },
          (error) => {
            // Reducers may handle this to reset isFetching
            // Rethrow so returned Promise is rejected
            throw error;
          }
        ); // dispatch(loginSuccessful(response.data["users"]));
        // dispatch(NavigationService.navigate("DashBoard"));
      })
      .catch((err) => dispatch(loginFailed(err)));
  };
};
