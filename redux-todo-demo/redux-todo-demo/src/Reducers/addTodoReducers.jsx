const initialState = {
  todo: [],
  completed: [],
  allList: [],
};
const AddTodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "Todo":
      return {
        ...state,
        todo: [...state.todo, action.payload],
        allList: [...state.todo, action.payload],
      };
    case "Completed":
      return {
        ...state,
        todo: state.todo.filter((name) => name !== action.payload),
        completed: [...state.completed, action.payload],
      };
    default:
      return state;
  }
};

export default AddTodoReducers;
