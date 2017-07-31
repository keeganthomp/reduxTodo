import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todosReducer";

let reducers = combineReducers({
  todos: todosReducer
});

let store = createStore(reducers);

export default store;
