import {
    GET_TODOS,
    GET_ITEMS
} from "../types/BoardTypes";
import Cookies from "js-cookie";
import axios from "axios";

const token = Cookies.get("token");

const API = 'https://todos-project-api.herokuapp.com'

export const getTodos = () => dispatch => {
    axios({
        method: "get",
        url: `${API}/todos`,
        headers: {
        Authorization: `Bearer ${token}`,
        }
    })
    .then(response => {
        dispatch({
            type: GET_TODOS,
            payload: response.data,
        });
    })
};
  
export const getItems = (id) => dispatch => {
    axios({
        method: "get",
        url: `${API}/todos/${id}/items`,
        headers: {
        Authorization: `Bearer ${token}`,
        },
    })
    .then(response => {
        dispatch({
            type: GET_ITEMS,
            payload: response.data,
        });
    })
};