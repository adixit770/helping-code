const initialState = {
    value: 10000,
  };
  const AmountReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DEBIT":
        return { value: state.value - action.payload };
      case "CREDIT":
        return { value: state.value + action.payload };
      default:
        return state;
    }
  };
  
  export default AmountReducer;
  