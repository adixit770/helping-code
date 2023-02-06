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
import { useMaterialUIController, setLayout } from "context";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  // const [error400, setError400] = React.useState("");
  // const [error401, setError401] = React.useState("");
  /* eslint-disable */
  const [controller, dispatch] = useMaterialUIController();
  const history = useNavigate();
  // const msg =
  //   statusCode === 401
  //     ? "invalid Email or Password"
  //     : statusCode === 400
  //     ? "Password must contained uper case ,lower case, numeric value"
  //     : "";

  const login = () => {
    // console.log(controller);
    if (localStorage.getItem("token")) {
      history("/dashboard");
    }
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { pathname } = useLocation();

  React.useEffect(() => {
    setLayout(dispatch, "login");
  }, [pathname]);
  const onSubmit = (values) => {
    // api

    fetch("http://spyss.dollopinfotech.com/adminLoginApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        localStorage.setItem("token", json?.response.accessToken?.toString());
        localStorage.setItem("time", json?.response.tokenValidity);
        login();
      })
      .catch((err) => {
        // console.log("ooo", err);
      })
      .finally(() => {});
  };
  return (
    <Container className="login">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "white", boxShadow: "none" }}>
          <Toolbar>
            <img
              src="spyssLogo.png"
              alt=""
              style={{ height: "84px", position: "relative", left: "10rem" }}
            />
            <Typography variant="h6" style={{ position: "relative", left: "37rem", color: "gray" }}>
              You Do not have an account ?
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
            <div>
              <img src="assets/login_section/Mask Group 14.png" alt="" />
            </div>
            <Typography
              variant="h5"
              style={{
                color: "white",
                position: "relative",
                top: "-3rem",
                right: "-1rem",
              }}
            >
              SPYSS --------------------------------
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "white",
                position: "relative",
                right: "-1rem",
                bottom: "2rem",
                display: "flex",
                fontSize: "19px",
              }}
            >
              SPYSS was started in 1980 as a small yoga camp at Karnataka
            </Typography>
            <div>
              <img
                src="assets/login_section/background.png"
                alt=""
                style={{ width: "17rem", position: "relative", left: "4rem" }}
              />
            </div>
            <img
              src="assets/login_section/yoga_meditation.png"
              alt=""
              style={{
                position: "relative",
                bottom: "18rem",
                width: "15rem",
                left: "80px",
              }}
            />
            <img
              src="assets/login_section/Mask Group 15.png"
              alt=""
              style={{ position: " relative", bottom: "26em", left: "206px" }}
            />
          </div>
        </div>
        <div
          style={{
            maxWidth: "16em",
            left: "78em",
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
                left: "37rem",
                boxShadow: "inherit",
              }}
            >
              <div style={{ position: "relative" }}>
                <Typography
                  variant="h5"
                  style={{
                    color: "orangered",
                    position: "relative",
                    right: "-1rem",
                    top: "18px",
                  }}
                >
                  Welcome{" "}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    position: "relative",
                    right: "-131px",
                    top: "-13px",
                  }}
                >
                  to{" "}
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    position: "relative",
                    right: "-15px",
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
                    right: "-17px",
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
                style={{ position: "relative", top: "35px", right: "-18px" }}
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
                style={{ position: "relative", top: "57px", right: "-19px" }}
              >
                Password
              </TextField>
              <Button
                type="submit"
                variant="contained"
                style={{
                  position: "relative",
                  top: "9rem",
                  right: "12rem",
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
