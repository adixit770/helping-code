import {createStore} from "redux";
import Reducers from "./Reducers";
const initialState = {};
const store = createStore(Reducers, initialState);

export default store;
