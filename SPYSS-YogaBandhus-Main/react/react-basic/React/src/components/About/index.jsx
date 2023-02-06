import React, { Component } from "react";
import Slider from "react-slick";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class About extends Component {
  render() {
    const settings = {
      dots: true,
      prevarrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      //   autoplay: true,
      //   autoplaySpeed: 2500,
    };
    return (
      <>
          <Slider {...settings}>
            <div>
              <CCard className="cards" style={{ width: "30rem" }}>
                <CCardImage orientation="top" src="https://images.unsplash.com/photo-1617814087305-32154643f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHN1cGVyY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </div>
            <div>
              <CCard className="cards" style={{ width: "30rem" }}>
                <CCardImage orientation="top" src="https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN1cGVyY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </div>
            <div>
              <CCard className="cards" style={{ width: "30rem" }}>
                <CCardImage orientation="top" src="https://images.unsplash.com/photo-1621615578530-cbf3c443165f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80" />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </div>
            <div>
              <CCard className="cards" style={{ width: "30rem" }}>
                <CCardImage orientation="top" src="https://images.unsplash.com/photo-1627440829335-b42fba2a15dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXJjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </div>
            <div>
              <CCard className="cards" style={{ width: "30rem" }}>
                <CCardImage orientation="top" src="https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJjYXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </div>

          </Slider>
        
      </>
    );
  }
}
