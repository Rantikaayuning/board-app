import {
    LOGIN,
    SIGN_UP
} from "../types/UserTypes";

import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";

const API = 'https://todos-project-api.herokuapp.com'

export const postLogin = (body) => (dispatch) => {
  return axios
    .post(`${API}/auth/login`, body)
    .then((response) => {
      dispatch({
        type: LOGIN,
        payload: jwt_decode(response.data.auth_token),
        loading: false
      });
      Cookies.set("token", response.data.auth_token);
      return response.data.token;
    })
};
  
// export const postSignup = (payload) => (dispatch) => {
//   axios
//     .post(`${API}/signup`, payload)
//     .then((response) => {
//         dispatch({
//           type: SIGN_UP,
//           payload: response.data.message,
//           loading: false
//         });
//     })
// };