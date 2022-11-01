import {applyMiddleware, createStore} from "redux";
import {titleReducer} from "../reducer/titleReducer";
import thunk from "redux-thunk";

export const store = createStore(
    titleReducer, applyMiddleware(thunk))