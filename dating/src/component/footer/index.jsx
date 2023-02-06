import React from "react";
import Button from "@mui/material/Button";
import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <section className="">
      <Container
        maxWidth="xl"
        style={{ background: "#0f4e88", color: "white" }}
        className="text-center text-md-start mt-5"
      >
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Cotact Details</h6>
            <p>
              <MDBIcon far icon="envelope" />
              &nbsp;&nbsp;support@zodiac.com
            </p>
            <p>
              <MDBIcon fab icon="facebook" /> <MDBIcon fab icon="instagram" />
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Get Your Match</h6>
            <p>
              <input
                style={{ background: "transparent" }}
                type="email"
                value="Email"
              />
              <Button
                sx={{ background: "#aa0c7e", marginTop: "1rem" }}
                variant="contained"
              >
                Subscribe
              </Button>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <h6>
              <p href="#!" className="text-reset">
                Testimonials
              </p>
              <p href="#!" className="text-reset">
                Blogs
              </p>
            </h6>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 href="#!" className="text-reset">
              Trusted By Millions
            </h6>
            <p href="#!" className="text-reset">
              <MDBIcon fab icon="gratipay" /> Best Matches
            </p>
            <p href="#!" className="text-reset">
              <MDBIcon fas icon="lock" /> 100% Secure
            </p>
            <p href="#!" className="text-reset">
              <MDBIcon fas icon="paper-plane" /> Max Responses
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Astrodipity</h6>
            <p>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </MDBCol>
        </MDBRow>
      </Container>
    </section>
  );
}
