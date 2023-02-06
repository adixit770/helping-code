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

export default class SimpleSlider extends Component {
  
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
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
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
                  "https://c4.wallpaperflare.com/wallpaper/1000/83/747/motorcycles-ducati-wallpaper-preview.jpg"
                }
                alt="Not found"
                style={{ width: "90rem", height: "45rem", margin: "auto" }}
              />
            </div>
            <div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4_uTcy9_Oijet69SvJMsEff_16GwforJQw&usqp=CAU"
                }
                alt="Not found"
                style={{ width: "90rem", height: "42rem", margin: "auto" }}
              />
            </div>
            <div>
              <img
                src={
                  "https://www.freewalldownload.com/download/amazing-sports-bike-long-life-hd-picture-images-photos/"
                }
                alt="Not found"
                style={{ width: "90rem", height: "42rem", margin: "auto" }}
              />
            </div>
            <div>
              <img
                src={
                  "https://wallpapercave.com/wp/wp1898353.jpg"
                }
                alt="Not found"
                style={{ width: "90rem", height: "42rem", margin: "auto" }}
              />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
