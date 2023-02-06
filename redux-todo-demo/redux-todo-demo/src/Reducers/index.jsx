import { combineReducers } from "redux";
import AddTodoReducers from "./addTodoReducers";

const Reducers = combineReducers({
  todolist: AddTodoReducers,
});

export default Reducers;
