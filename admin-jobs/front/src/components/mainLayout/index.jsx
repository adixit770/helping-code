import React from "react";
import SideNav from "../sideNav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <SideNav>{children}</SideNav>
    </div>
  );
};

export default MainLayout;
