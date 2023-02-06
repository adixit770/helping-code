import { createStore } from "redux";
import Reducers from "./reducers";
const initialState = {};
const store = createStore(Reducers, initialState);

export default store;
