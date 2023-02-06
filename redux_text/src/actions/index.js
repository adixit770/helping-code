export const debit = (amount) => {
    return {
      type: "DEBIT",
      payload: amount,
    };
  };
  
  export const credit = (amount) => {
    return {
      type: "CREDIT",
      payload: amount,
    };
  };
  
  export default debit;
  