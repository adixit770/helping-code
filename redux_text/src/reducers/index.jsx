import { combineReducers } from "redux";
import AmountReducer from "./amountReducer";

const Reducers = combineReducers({
  amount: AmountReducer,
});

export default Reducers;
