import { createContext } from "react";
import React from "react";
 
export const userNameContext = createContext();

const UserProvider = ({ children }) => {
  return (
    <userNameContext.Provider value={{ name: "nayan", age: 21 }}>
      {children}
    </userNameContext.Provider>
  );
};

export default UserProvider ;
