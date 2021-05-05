import {
    GET_ITEMS,
    GET_TODOS
} from "../types/BoardTypes";

const initialState = {
    todos: null,
    items: null,
    isLoading: false,
};

const boardReducers = (state = initialState, action) => {
    const { type, payload, loading } = action;
    switch (type) {
        case GET_TODOS:
        return {
            ...state,
            todos: payload,
        };
        case GET_ITEMS:
        return {
            ...state,
            items: payload,
        };
        default:
        return state;
    }
};

export default boardReducers;
    