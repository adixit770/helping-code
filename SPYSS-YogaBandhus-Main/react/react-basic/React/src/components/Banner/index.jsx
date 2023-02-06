import React, { Component } from "react";
import Slider from "react-slick";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Modal } from "@mui/material";

export default class Banner extends Component {
  state={
    openModal: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  render() {
    const settings = {
      arrows:false,
      infinite: true,
      speed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <h3>Lamborgini</h3>
              </Typography>
              <Button color="inherit">
                <div>
                  <Button variant="contained" onClick={this.onClickButton}>
                    Guest
                  </Button>
                  <Modal
                    open={this.state.openModal}
                    onClose={this.onCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={"style"}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Login Page
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label for="floatingPassword">Password</label>
                          <Button
                            variant="outlined"
                            style={{
                              background: "black",
                              color: "whitesmoke",
                              marginRight: "20rem",
                              marginTop: "1rem",
                            }}
                          >
                            Login
                          </Button>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <div style={{ width: "90rem", height: "42rem", margin: "auto" }}>
          <Slider {...settings}>
            <div>
              <img
                src={
                  "https://images.unsplash.com/photo-1570294646112-27ce4f174e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1799&q=80"
                }
                alt="Not found"
                style={{ width: "90rem", height: "45rem", margin: "auto" }}
              />
            </div>
            <div>
              <img
                src={
                  "https://images.unsplash.com/photo-1570294645755-cbd74614549d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1799&q=80"
                }
                alt="Not found"
                style={{ width: "90rem", height: "45rem", margin: "auto" }}
              />
            </div>
            <div>
              <img
                src={
                  "https://images.unsplash.com/photo-1570294645676-04daf630cfdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1799&q=80"
                }
                alt="Not found"
                style={{ width: "90rem", height: "45rem", margin: "auto" }}
              />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
