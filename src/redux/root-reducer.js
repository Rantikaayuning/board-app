import { combineReducers } from "redux";
import userReducers from "./reducers/UserReducers";
import boardReducers from "./reducers/BoardReducers";

export default combineReducers({
    users : userReducers,
    board : boardReducers
});