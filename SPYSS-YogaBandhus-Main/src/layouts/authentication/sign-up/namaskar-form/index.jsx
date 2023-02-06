/* eslint-disable */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by https://www.creative-tim.com

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
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Grid } from "@mui/material";
import {  useEffect, useState } from "react";


// Authentication layout components
// import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
// import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function NamaskarForm({id="",row}) {

  console.log("row -> ", row);

  const [name, setName]=useState("")
  const [type, setType]=useState("")
  const [count, setCount]=useState("")
  const [upaValaya,setUpaValaya]=useState("")
  const [valaya, setValaya]=useState("")
  const [city, setCity]=useState("")
  const [district, setDistrict]=useState("")
  const [state, setState]=useState("")
  const [country, setCountry]=useState("")
  const [wing, setWing]=useState("")
  const [status, setStatus]=useState("")





  useEffect(() => {
    if (id!=="") {
      console.log("id -> ", id);

    //   const{name:{props:{name:eventName}},wing:{props:{children:eventWing}},mens:{props:{children:eventMens}},womens:{props:{children:eventWomens}},
    //   yoga:{props:{children:eventYoga}},valaya:{props:{children:eventValaya}},city:{props:{children:eventCity}},
    //   district:{props:{children:eventDistrict}},state:{props:{children:eventState}},
    //   country:{props:{children:eventCountry}}}=row;
  
     const{name:{props:{name:eventName}},valaya:{props:{children:eventValaya}},wing:{props:{children:eventWing}},city:{props:{children:eventCity}},
     district:{props:{children:eventDistrict}},state:{props:{children:eventState}},
     country:{props:{children:eventCountry}}} = row;

      setName(eventName)
        setValaya(eventValaya)
      setWing(eventWing)
      setCity(eventCity)
      setDistrict(eventDistrict)
      setState(eventState)
      setCountry(eventCountry)
    }
  }, [id]);

  return (
      <MDBox pt={6} pb={3}>
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
                  Namaskar Form
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Card>
                  <MDBox pt={4} pb={3} px={3}>
                    <MDBox component="form" role="form">
                      <Grid container spacing={2}>
                        <Grid item lg={12} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="Event Name" value={name} onChange={(e)=>setName(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                      
                        <Grid item lg={6} xs={12} mb={2} md={2} >
                            <MDInput type="text" label="Type Of Namaskars" value={type} onChange={(e)=>setType(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                     
                        <Grid item lg={6} xs={12} mb={2} md={2} >
                            <MDInput type="text" label="Count Of Namaskars" value={count} onChange={(e)=>setCount(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="UPA valaya(Area)" value={upaValaya} onChange={(e)=>setUpaValaya(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="Valaya(Group Of Areas)" value={valaya} onChange={(e)=>setValaya(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                        
                        <Grid item lg={12} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="Status" value={status} onChange={(e)=>setStatus(e.target.value)} variant="standard" fullWidth />
                        </Grid>
                     
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="City" value={city} onChange={(e)=>setCity(e.target.value)} variant="standard" fullWidth />
                        </Grid>
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="District" value={district} onChange={(e)=>setDistrict(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="State" value={state} onChange={(e)=>setState(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="Country" value={country} onChange={(e)=>setCountry(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                        <Grid item lg={6} xs={12} mb={2} md={12} >
                            <MDInput type="text" label="Wing" value={wing} onChange={(e)=>setWing(e.target.value)}
                             variant="standard" fullWidth />
                        </Grid>
                      </Grid>
                      <MDBox mt={4} mb={1}>
                      <MDButton
                          onClick={() => {
                            update();
                          }}
                          sx={{
                            width: "10rem",
                            backgroundColor: "orangered",
                            color: "white!important",
                          }}
                        >
                          {!id ? "Save" : "Update"}
                        </MDButton>
                      </MDBox>
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

export default NamaskarForm;
