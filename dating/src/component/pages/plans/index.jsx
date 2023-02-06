import { Container } from "@mui/system";
import React from "react";
import MainLayout from "../../layout";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import plan from "./plan.json";
import { useState } from "react";

export default function Plans() {
  {
    console.log("Plan", plan);
  }
  return (
    <MainLayout>
      <div
        style={{
          display: "grid",
          padding: "0 24px",
          margin: "0 64px",
          background: "#0f4e88",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {plan.map((data, index) => {
          return (
            <Card key={index}>
              <CardContent style={{ Width: "1rem" }}>
                <Typography
                  sx={{ fontSize: 24, fontWeight: 600 }}
                  color="black"
                  fontFamily={"sans-serif"}
                  gutterBottom
                >
                  {data.title}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="red" gutterBottom>
                  {data.date}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {data.price}
                </Typography>
                {data.list.map((list, index) => {
                  return (
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {list}
                    </Typography>
                  );
                })}
              </CardContent>
              <CardActions>
                <Button
                  className="plan"
                  size="small"
                  style={{
                    background: "#0F4E88",
                    color: "white",
                    border: "#EBB6E6 3px solid",
                    width: "16rem",
                    height: "72px",
                  }}
                >
                  {data.button}
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </MainLayout>
  );
}
