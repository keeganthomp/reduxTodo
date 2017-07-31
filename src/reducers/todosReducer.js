//state is an array
export default (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case "ADD_TODO":
      let todoData = action.payload;
      let newTodo = {
        title: todoData.title,
        description: todoData.description
      };
      newState.push(newTodo);
      return newState;
    case "DELETE_TODO":
      let index = action.payload;
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
};
