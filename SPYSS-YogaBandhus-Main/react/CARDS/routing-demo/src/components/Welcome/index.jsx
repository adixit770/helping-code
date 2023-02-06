import React from "react";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import FormDemo from "../FormDemo";
class Welcome extends React.Component {
  render() {
    return (
      <MainLayout show={false}>
        <div>
          <FormDemo/>
        </div>
      </MainLayout>
    );
  }
}

export default Welcome;
