import store from "../store/store";

export const addTodo = todoData => {
  store.dispatch({
    type: "ADD_TODO",
    payload: todoData
  });
};


export const deleteTodo = index => {
    store.dispatch({
        type: "DELETE_TODO",
        payload: index
    })
}