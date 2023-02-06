import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useState } from "react";
import { userContext } from "../../App";

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function LoginForm() {
  const email = "adixit770@gmail.com";
  const password = "1234";
  const values = React.useContext(userContext);
  const { login, setLogin } = values;
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("errors-> ", errors);
  const onSubmit = (values) => {
    console.log("values.email", values.email);
    if (email === values.email && password === values.password) {
      setLogin(true);
      console.log("login", login);
      history("/");
    }
   
    
  };

  return (
    <form
      style={{
        marginInline: "auto",
        border: "1px solid transparent",
        margin: "60px 48px",
        position: "static",
        top: "80px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
        <Typography variant="h1" color={"Highlight"}>
          LOG IN FORM
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "70px" }}>
          <Grid sm={4} xs={12}>
            <TextField
              label="Email"
              variant="standard"
              style={{ width: "100%" }}
              {...register("email")}
              error={!!errors?.email?.message}
              helperText={errors?.email?.message}
            >
              Email
            </TextField>
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField
              label="password"
              variant="standard"
              style={{ width: "100%" }}
              {...register("password")}
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            >
              Password
            </TextField>
          </Grid>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button variant="contained" type="submit" color="error">
            LOG IN
          </Button>
        </div>
      </Box>
    </form>
  );
}
