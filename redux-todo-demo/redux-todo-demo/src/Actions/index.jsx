export const AddTodo = (todo) => {
  return {
    type: "Todo",
    payload: todo,
  };
};
export const Completed = (completed) => {
  return {
    type: "Completed",
    payload: completed,
  };
};

export default AddTodo;
