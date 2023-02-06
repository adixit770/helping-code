import { Avatar, Button, Container, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Cards from "../Cards";
import MainLayout from "../MainLayout";

export default function YourCart() {
  return (
    <Container style={{ maxWidth: "778px" }}>
      <MainLayout>
        <div className="header">
          <div className="box">
            <div>
              <Avatar
                alt="no photo found"
                image="image.png"
                sx={{ width: 56, height: 56 }}
              />
            </div>
            <Typography variant="h4">Delicious home-cooked </Typography>
            <Typography variant="h4">Meals Delivered.</Typography>
            <Typography variant="h5">Dish of the Day.</Typography>
          </div>
          <Typography variant="h6">
            {" "}
            Lunch is Delivered between 12-2 pm{" "}
          </Typography>
          <Typography variant="h6">
            {" "}
            Dinner is Delivered between 6-8 pm{" "}
          </Typography>
        </div>
        <Cards />
        <NavLink to={"/checkout"}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginInline: "37.2rem" }}
          >
            Checkout
          </Button>
        </NavLink>
      </MainLayout>
    </Container>
  );
}
