/* eslint-disable */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

// import { useEffect,
//   useState } from "react";

function YogaBandhusId({ row }) {
  // console.log("YogaBandhusId...Id...=>", id);

  // console.log("YogaBandhusId...ROWS...=>", row);

  // const [firstname, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [gender, setGender] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [email, setEmail] = useState("");
  // const [languageKnown, setLanguageKnown] = useState("");
  // const [residentOfIndia, setResidentOfIndia] = useState("");
  // const [primaryContactNumber, setPrimaryContactNumber] = useState("");
  // const [highestQualification, setHighestQualification] = useState("");
  // const [state, setState] = useState("");
  // const [valaya, setValaya] = useState("");
  // const [district, setDistrict] = useState("");

  const {
    firstname: {
      props: { children: firstName },
    },
    lastname: {
      props: { children: lastName },
    },
    gender: {
      props: { children: gender },
    },
    dob: {
      props: { children: dateOfBirth },
    },
    email: {
      props: { children: email },
    },
    langknown: {
      props: { children: languageKnown },
    },
    resofind: {
      props: { children: residentOfIndia },
    },
    priconno: {
      props: { children: primaryContactNumber },
    },
    highqual: {
      props: { children: highestQualification },
    },
    state: {
      props: { children: state },
    },
    valaya: {
      props: { children: valaya },
    },
    district: {
      props: { children: district },
    },
  } = row;

  // useEffect(() => {
  //   if (id !== "") {
  //     console.log("id -> ", id);
  //     // setFirstName(firstname);
  //     // setLastName(lastName);
  //     // setGender(gender);
  //     // setDateOfBirth(dateOfBirth);
  //     // setEmail(email);
  //     // setLanguageKnown(languageKnown);
  //     // setResidentOfIndia(residentOfIndia);
  //     // setPrimaryContactNumber(primaryContactNumber);
  //     // setHighestQualification(highestQualification);
  //     // setState(state);
  //     // setValaya(valaya);
  //     // setDistrict(district);
  //   }
  // }, [id]);
  return (
    <MDBox>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Detailed Page
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <Grid container spacing={2}>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label={firstName} variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>First Name : {firstName}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label="Last Name" variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Last Name : {lastName}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label="Gender" variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Gender : {gender}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography
                          type="text"
                          label="Date Of Birth"
                          variant="standard"
                          fullWidth
                        >
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Date Of Birth : {dateOfBirth}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label="Email" variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Email : {email}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography
                          type="text"
                          label="Language Known"
                          variant="standard"
                          fullWidth
                        >
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Language Known : {languageKnown}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography
                          type="text"
                          label="Resident Of India"
                          variant="standard"
                          fullWidth
                        >
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Resident Of India : {residentOfIndia}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography
                          type="text"
                          label="Primary Contact Number"
                          variant="standard"
                          fullWidth
                        >
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Primary Contact Number : {primaryContactNumber}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography
                          type="text"
                          label="Highest Qualification"
                          variant="standard"
                          fullWidth
                        >
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Highest Qualification : {highestQualification}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label="State" variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>State : {state}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label="Valaya" variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>Valaya : {valaya}</InputLabel>
                        </MDTypography>
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDTypography type="text" label="District" variant="standard" fullWidth>
                          <InputLabel sx={{padding: "4px",fontSize:"14px"}}>District : {district}</InputLabel>
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/* <MDBox mt={4} mb={1}>
                      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <MDButton
                          sx={{
                            width: "10rem",
                            backgroundColor: "orangered",
                            color: "white!important",
                          }}
                        >
                          Save
                        </MDButton>
                        <MDButton
                          sx={{
                            width: "10rem",
                            backgroundColor: "orangered",
                            color: "white!important",
                          }}
                        >
                          Cancel
                        </MDButton>
                      </div>
                    </MDBox> */}
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default YogaBandhusId;
