import axios from "react-native-axios";
import { API_URL } from "../config";
import {
  performingLogin,
  loginSuccessful,
  loginFailed,
} from "../reducer/loginReducer";
import { dataAvailable, putDate, setImageUrl } from "../reducer/dataReducer";

export const callPostsApi = (token) => {
  return axios
    .get("https://welm8api.azurewebsites.net/api/categories/getcategories", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
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
            const endTime = new Date().getTime();
            const runtime = endTime - startTime;
            var date = new Date();
            dispatch(putDate(date.toLocaleString("en-US")));
            dispatch(setImageUrl(response.data["imageUrls"]));
            dispatch(dataAvailable(response.data["categoryData"]));
          },
          (error) => {
            throw error;
          }
        ); // dispatch(loginSuccessful(response.data["users"]));
      })
      .catch((err) => dispatch(loginFailed(err)));
  };
};
