import * as React from "react";
import { useReducer } from "react";
import { Button} from "@mui/material";

const Function = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
  }
};
const Reducer= () => {
  const State1 = {
    counter: 0,
  };
  const [state, dispatch] = useReducer(Function,State1);
  
  return (
    <>
      <Button variant="contained"  color="success" onClick={()=>state.counter>0?dispatch({ type: "decrement" }):""}>-</Button>
      <div>{state.counter}</div>
      <Button variant="contained" color="success" onClick={()=>dispatch({ type: "increment" })}>+</Button>
    </>
  );
};

export default Reducer;
