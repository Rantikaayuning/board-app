import {
  LOGIN,
  SIGN_UP
} from "../types/UserTypes";
import Cookies from "js-cookie";

const initialState = {
  login: null,
  signup: null,
  token: Cookies.get("token") || null,
  isLoading: false,
  email: '',
  password: ''
};

const userReducers = (state = initialState, action) => {
  const { type, payload, token, loading } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: payload,
        token: token,
        isLoading: loading
      };
    case SIGN_UP:
      return {
        ...state,
        signup: payload,
        isLoading: loading
      };
    default:
      return state;
  }
};

export default userReducers;
  