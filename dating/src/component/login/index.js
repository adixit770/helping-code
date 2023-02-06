import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "reactstrap";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const [error400, setError400] = React.useState("");
  const [error401, setError401] = React.useState("");
  const [token, setToken] = React.useState("");
  // const msg =
  //   statusCode === 401
  //     ? "invalid Email or Password"
  //     : statusCode === 400
  //     ? "Password must contained uper case ,lower case, numeric value"
  //     : "";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log("errors=>", errors);

  const onSubmit = (values) => {
    console.log("values=>", values);
    reset();
    // api
    fetch("//192.168.2.142:8080/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // console.log("aman",res.json());
          let msg = res.json();
          console.log("aman", msg);
        }
        throw res;
      })
      .then((json) => {
        setToken(json.accessToken.toString());
        console.log(" accessToken =>", token);
      })
      .catch((err) => {
        console.log("ooo", err);
      })
      .finally(() => {});
  };
  return (
    <Container maxwidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "white", boxShadow: "none" }}
        >
          <Toolbar>
            <img
              src="logo copy.png"
              alt=""
              style={{ height: "84px", position: "relative", left: "10rem" }}
            />
            <Typography
              variant="h6"
              style={{ position: "relative", left: "37rem", color: "gray" }}
            >
              You Don't have an account ?
            </Typography>
            <Button
              style={{
                background: "#f26000",
                color: "white",
                position: "relative",
                left: "38rem",
                width: "8rem",
              }}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        style={{
          background: "#fef6f1",
          height: " 46rem",
          boxShadow: "inherit",
        }}
      >
        <div>
          <div
            style={{
              background: "#f26000",
              width: "28%",
              height: "40rem",
              position: "relative",
              top: "3rem",
              left: "12rem",
            }}
          >
            <div style={{ position: "relative", right: "6rem" }}>
              <img src="assets/login_section/Mask Group 14.png" alt="" />
            </div>
            <Typography
              variant="h5"
              style={{
                color: "white",
                position: "relative",
                top: "-2rem",
                right: "1rem",
              }}
            >
              SPYSS --------------------------------
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "white",
                position: "relative",
                right: "0rem",
                bottom: "2rem",
              }}
            >
              SPYSS was started in 1980 as a small yoga camp at Karnataka
            </Typography>
            <div>
              <img
                src="assets/login_section/background.png"
                alt=""
                style={{ width: "17rem", position: "relative", left: "0rem" }}
              />
            </div>
            <img
              src="assets/login_section/yoga_meditation.png"
              alt=""
              style={{
                position: "relative",
                bottom: "17rem",
                width: "14rem",
                left: "2px",
              }}
            />
            <img
              src="assets/login_section/Mask Group 15.png"
              alt=""
              style={{ position: " relative", bottom: "25em", left: "74px" }}
            />
          </div>
        </div>
        <div
          style={{
            maxWidth: "16em",
            left: "65em",
            bottom: "34em",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="assets/login_section/background.png"
            alt=""
            style={{
              filter: "drop-shadow(2px 4px 0px #d6a67f)",
              width: "32rem",
            }}
          />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                width: "24em",
                height: "30em",
                backgroundColor: "white",
                position: "relative",
                bottom: "65rem",
                left: "34em",
                boxShadow: "inherit",
              }}
            >
              <div style={{ position: "relative" }}>
                <Typography
                  variant="h5"
                  style={{
                    color: "orange",
                    position: "relative",
                    right: "117px",
                    top: "18px",
                  }}
                >
                  Welcome{" "}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    position: "relative",
                    right: "39px",
                    top: "-12px",
                  }}
                >
                  to{" "}
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    position: "relative",
                    right: "106px",
                    top: "-9px",
                    color: "navy",
                    fontWeight: "bolder",
                  }}
                >
                  Login
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    position: "relative",
                    right: "28px",
                    top: "2px",
                    fontWeight: "500",
                  }}
                >
                  Please select your login type .
                </Typography>
              </div>
              <TextField
                type="email"
                label="Email"
                name="Email"
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                style={{ position: "relative", top: "35px", right: "57px" }}
              >
                Email
              </TextField>
              <TextField
                type="password"
                label="Password"
                name="Password"
                variant="outlined"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                style={{ position: "relative", top: "57px", right: "20px" }}
              >
                Password
              </TextField>
              <Button
                type="submit"
                variant="contained"
                style={{
                  position: "relative",
                  top: "9rem",
                  right: "14rem",
                  background: "orangered",
                }}
              >
                Login
              </Button>
            </Box>
          </form>
        </div>
      </Box>
    </Container>
  );
}
