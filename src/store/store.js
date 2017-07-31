import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todosReducer";

let reducers = combineReducers({
  todos: todosReducer
});

let store = createStore(reducers);

export default store;

store.dispatch({
  type: "ADD_TODO",
  payload: { title: "Get Pickles", description: "eat dillss" }
});

store.subscribe(() => {
  console.log(store.getState());
});
