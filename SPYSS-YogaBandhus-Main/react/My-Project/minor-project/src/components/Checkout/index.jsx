
import { useState } from "react";
import CheckoutFrom from "./CheckoutForm";
import { Stepper, Step } from "react-form-stepper";
import PaymentForm from "./PaymentForm";
import OrderForm from "./OrderForm";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="App">
      <PlaceOrder />
    </div>
  );
}

export const PlaceOrder = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div style={{marginTop:"5rem"}}>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="LOGIN" />
        <Step onClick={() => setGoSteps(1)} label="DELIVERY" />
        <Step onClick={() => setGoSteps(2)} label="ORDER SUMMERY" />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <CheckoutFrom onClick={() => setGoSteps(1)}/>
          <Button className="btn" onClick={() => setGoSteps(1)}>
            Next
          </Button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
        <PaymentForm/>
          <Button className="btn" onClick={() => setGoSteps(2)}>Next</Button>
        </div>
      )}
      {goSteps === 2 && (
        <div>
          <OrderForm/>
          <Button className="btn" onClick={() => setGoSteps(3)}><NavLink to={"/thankyou"}>Submit</NavLink></Button>
        </div>
      )}
    </div>
  );
};
