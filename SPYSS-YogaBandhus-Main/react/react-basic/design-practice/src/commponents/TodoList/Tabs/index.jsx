import { Button } from "@mui/material";
import React from "react";
const Tabs = ({ changeTab,active }) => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <div onClick={()=>changeTab(1)}><Button variant={active===1?"contained":"outlined"}>Todo List</Button></div>
      <div  onClick={()=>changeTab(2)}><Button variant={active===2?"contained":"outlined"}>Completed List</Button></div>
      <div  onClick={()=>changeTab(3)}><Button variant={active===3?"contained":"outlined"}>All List</Button></div>
    </div>
  );
};
export default Tabs;
