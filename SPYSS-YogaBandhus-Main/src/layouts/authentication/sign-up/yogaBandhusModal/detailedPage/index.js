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

import MDBox from "components/MDBox";
import {
  Card,
  CircularProgress,
  // CircularProgress,
  Grid,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

function DetailedPage() {
  const { id } = useParams();
  // const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  // console.log("id => ", id);

  const [name, setName] = useState("");
  const [midName, setMidName] = useState("");
  const [lstName, setLstName] = useState("");
  const [gend, setGend] = useState("");
  const [dob, setDob] = useState("");
  const [eml, setEml] = useState("");
  const [doj, setDoj] = useState("");
  const [lnkn, setLnkn] = useState("");
  const [roi, setRoi] = useState("");
  const [cor, setCor] = useState("");
  const [conOfOr, setConOfOr] = useState("");
  const [usName, setUsName] = useState("");
  const [cne, setCne] = useState("");
  const [anl, setAnl] = useState("");
  const [pcn, setPcn] = useState("");
  const [wcn, setWcn] = useState("");
  const [adhr, setAdhr] = useState("");
  const [hiqu, setHiQu] = useState("");
  const [emptype, setEmpType] = useState("");
  const [nation, setNation] = useState("");
  const [st, setSt] = useState("");
  const [val, setVal] = useState("");
  const [dis, setDis] = useState("");
  const [local, setLocal] = useState("");
  const [pin, setPin] = useState("");
  const [fstTraiNme, setFstTraiNme] = useState("");
  const [clsAttend, setClsAttend] = useState("");
  const [bnchName, setBnchNm] = useState("");
  const [attAnCmp, setAttAnCmp] = useState("");
  const [hghCmp, setHghCmp] = useState("");
  const [jilWng, setJilWng] = useState("");
  const [jilMnthYr, setJilMnthYr] = useState("");
  const [pranWng, setPranWng] = useState("");
  const [pranYrLctn, setPranYrLctn] = useState("");
  const [aatSandhWng, setAatSandhWng] = useState("");
  const [aatSandhMnthYr, setAatSandhMnthYr] = useState("");
  const [pragWng, setPragWng] = useState("");
  const [pragYrLcn, setPragYrLcn] = useState("");
  const [saadhSaourWng, setSaadhSaourWng] = useState("");
  const [saadhSaourYrLcn, setSaadhSaourYrLcn] = useState("");
  const [rls, setRls] = useState("");
  const [cmite, setCmite] = useState("");
  const [othInts, setOthInts] = useState("");
  const [decln, setDecln] = useState("");
  const [intrsToVlntr, setIntrsToVlntr] = useState("");
  const [hwYuWntToVlntr, setHwYuWntToVlntr] = useState("");
  const [enbld, setEnbld] = useState("");
  const [tmStmp, setTmStmp] = useState("");
  const [wng, setWng] = useState("");
  const [bth, setBth] = useState("");
  const [jilCompSts, setJilCompSts] = useState("");
  const [pranCompSts, setPranCompSts] = useState("");
  const [aatmSandhCompSts, setAatmSandhCompSts] = useState("");
  const [pragCompSts, setPragCompSts] = useState("");
  const [sadhSourCompSts, setSadhSourCompSts] = useState("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://62e125d9fa99731d75cf5abd.mockapi.io/YogaBandhus/${id}`)
        .then((response) => response.json())
        .then((json) => {
          // console.log("Json => ", json);
          const {
            firstName,
            middleName,
            lastName,
            gender,
            dateOfBirth,
            email,
            dateOfJoining,
            languageKnown,
            residentOfIndia,
            countryOfResidence,
            countryOfOrigin,
            userName,
            credentialsNonExpired,
            accountNonLocked,
            primaryContactNumber,
            whatsappContactNumber,
            aadhar,
            highestQualification,
            employmentType,
            nationality,
            state,
            valaya,
            district,
            locality,
            pincode,
            firstTrainerName,
            classAttendend,
            branchName,
            attendedAnyCamp,
            highestCamp,
            jillaWing,
            jillaMonthYear,
            pranthaWing,
            pranthaYearLocation,
            aatmaanusandhanaWing,
            aatmaanusandhanaMonthYear,
            pragathaWing,
            pragathaYearLocation,
            sadhanaSourabhaWing,
            sadhanaSourabhaYearLocation,
            roles,
            committee,
            otherInterests,
            declaration,
            interestedToVolanteer,
            howYouWantToVolanteer,
            enabled,
            timeStamp,
            wing,
            batch,
            jillaCompletionStatus,
            pranthaCompletionStatus,
            aatmaanusandhanaCompletionStatus,
            pragathaCompletionStatus,
            sadhanaSourabhaCompletionStatus,
          } = json;
          setName(firstName);
          setMidName(middleName);
          setLstName(lastName);
          setGend(gender);
          setDob(dateOfBirth);
          setEml(email);
          setDoj(dateOfJoining);
          setLnkn(languageKnown);
          setRoi(residentOfIndia);
          setCor(countryOfResidence);
          setConOfOr(countryOfOrigin);
          setUsName(userName);
          setCne(credentialsNonExpired);
          setAnl(accountNonLocked);
          setPcn(primaryContactNumber);
          setWcn(whatsappContactNumber);
          setAdhr(aadhar);
          setHiQu(highestQualification);
          setEmpType(employmentType);
          setNation(nationality);
          setSt(state);
          setVal(valaya);
          setDis(district);
          setLocal(locality);
          setPin(pincode);
          setFstTraiNme(firstTrainerName);
          setClsAttend(classAttendend);
          setBnchNm(branchName);
          setAttAnCmp(attendedAnyCamp);
          setHghCmp(highestCamp);
          setJilWng(jillaWing);
          setJilMnthYr(jillaMonthYear);
          setPranWng(pranthaWing);
          setPranYrLctn(pranthaYearLocation);
          setAatSandhWng(aatmaanusandhanaWing);
          setAatSandhMnthYr(aatmaanusandhanaMonthYear);
          setPragWng(pragathaWing);
          setPragYrLcn(pragathaYearLocation);
          setSaadhSaourWng(sadhanaSourabhaWing);
          setSaadhSaourYrLcn(sadhanaSourabhaYearLocation);
          setRls(roles);
          setCmite(committee);
          setOthInts(otherInterests);
          setDecln(declaration);
          setIntrsToVlntr(interestedToVolanteer);
          setHwYuWntToVlntr(howYouWantToVolanteer);
          setEnbld(enabled);
          setTmStmp(timeStamp);
          setWng(wing);
          setBth(batch);
          setJilCompSts(jillaCompletionStatus);
          setPranCompSts(pranthaCompletionStatus);
          setAatmSandhCompSts(aatmaanusandhanaCompletionStatus);
          setPragCompSts(pragathaCompletionStatus);
          setSadhSourCompSts(sadhanaSourabhaCompletionStatus);
        })
        .catch((err) => console.log("err", err))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  // const onSubmit = (value) => {
  //   if (id) {
  //     console.log(value);
  //     fetch(`https://62e125d9fa99731d75cf5abd.mockapi.io/YogaBandhus/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(value),
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           console.log(response);
  //         }
  //         throw response;
  //       })
  //       .catch((err) => console.log("err=>", err));
  //   }
  //   // POST API
  //   else {
  //     console.log(value);
  //     fetch("https://62e125d9fa99731d75cf5abd.mockapi.io/YogaBandhus", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(value),
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           console.log(response);
  //         }
  //         throw response;
  //       })
  //       .catch((err) => console.log("err=>", err));
  //   }
  // };
  // if (loading) {
  //   return <CircularProgress />;
  // }

  if (loading) {
    return (
      <DashboardLayout>
        <CircularProgress color="success" size="25vh" />
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <form
      onSubmit={handleSubmit(onSubmit)}
      style=
      {{
        textAlign: "center",
        width: "26rem",
      }}
      > */}
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ marginTop: "1rem" }}>
            <MDBox pt={3}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <Grid container spacing={2}>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="First Name"
                            variant="standard"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            // {...register("First Name")}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Middle Name"
                            variant="standard"
                            fullWidth
                            value={midName}
                            onChange={(e) => setMidName(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Last Name"
                            variant="standard"
                            fullWidth
                            value={lstName}
                            onChange={(e) => setLstName(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Gender"
                            variant="standard"
                            fullWidth
                            value={gend}
                            onChange={(e) => setGend(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Date Of Birth"
                            variant="standard"
                            fullWidth
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Email"
                            variant="standard"
                            fullWidth
                            value={eml}
                            onChange={(e) => setEml(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Date  Of Joining"
                            variant="standard"
                            fullWidth
                            value={doj}
                            onChange={(e) => setDoj(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Language Known"
                            variant="standard"
                            fullWidth
                            value={lnkn}
                            onChange={(e) => setLnkn(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Resident Of India"
                            variant="standard"
                            fullWidth
                            value={roi}
                            onChange={(e) => setRoi(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Country Of Residence"
                            variant="standard"
                            fullWidth
                            value={cor}
                            onChange={(e) => setCor(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Country Of Origin"
                            variant="standard"
                            fullWidth
                            value={conOfOr}
                            onChange={(e) => setConOfOr(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="User Name"
                            variant="standard"
                            fullWidth
                            value={usName}
                            onChange={(e) => setUsName(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Credentials Non Expired"
                            variant="standard"
                            fullWidth
                            value={cne}
                            onChange={(e) => setCne(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Account Non Locked"
                            variant="standard"
                            fullWidth
                            value={anl}
                            onChange={(e) => setAnl(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Primary Contact Number"
                            variant="standard"
                            fullWidth
                            value={pcn}
                            onChange={(e) => setPcn(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Whatsapp Contact Number"
                            variant="standard"
                            fullWidth
                            value={wcn}
                            onChange={(e) => setWcn(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Aadhar"
                            variant="standard"
                            fullWidth
                            value={adhr}
                            onChange={(e) => setAdhr(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Highest Qualification"
                            variant="standard"
                            fullWidth
                            value={hiqu}
                            onChange={(e) => setHiQu(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Employment Type"
                            variant="standard"
                            fullWidth
                            value={emptype}
                            onChange={(e) => setEmpType(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Nationality"
                            variant="standard"
                            fullWidth
                            value={nation}
                            onChange={(e) => setNation(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="State"
                            variant="standard"
                            fullWidth
                            value={st}
                            onChange={(e) => setSt(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Valaya"
                            variant="standard"
                            fullWidth
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="District"
                            variant="standard"
                            fullWidth
                            value={dis}
                            onChange={(e) => setDis(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Locality"
                            variant="standard"
                            fullWidth
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Pincode"
                            variant="standard"
                            fullWidth
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="First Trainer Name"
                            variant="standard"
                            fullWidth
                            value={fstTraiNme}
                            onChange={(e) => setFstTraiNme(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Class Attendend"
                            variant="standard"
                            fullWidth
                            value={clsAttend}
                            onChange={(e) => setClsAttend(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Branch Name"
                            variant="standard"
                            fullWidth
                            value={bnchName}
                            onChange={(e) => setBnchNm(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Attended Any Camp"
                            variant="standard"
                            fullWidth
                            value={attAnCmp}
                            onChange={(e) => setAttAnCmp(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Highest Camp"
                            variant="standard"
                            fullWidth
                            value={hghCmp}
                            onChange={(e) => setHghCmp(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Jilla Wing"
                            variant="standard"
                            fullWidth
                            value={jilWng}
                            onChange={(e) => setJilWng(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Jilla Month Year"
                            variant="standard"
                            fullWidth
                            value={jilMnthYr}
                            onChange={(e) => setJilMnthYr(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Prantha Wing"
                            variant="standard"
                            fullWidth
                            value={pranWng}
                            onChange={(e) => setPranWng(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Prantha Year Location"
                            variant="standard"
                            fullWidth
                            value={pranYrLctn}
                            onChange={(e) => setPranYrLctn(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Aatmaanusandhana Wing"
                            variant="standard"
                            fullWidth
                            value={aatSandhWng}
                            onChange={(e) => setAatSandhWng(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Aatmaanusandhana Month Year"
                            variant="standard"
                            fullWidth
                            value={aatSandhMnthYr}
                            onChange={(e) => setAatSandhMnthYr(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Pragatha Wing"
                            variant="standard"
                            fullWidth
                            value={pragWng}
                            onChange={(e) => setPragWng(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Pragatha Year Location"
                            variant="standard"
                            fullWidth
                            value={pragYrLcn}
                            onChange={(e) => setPragYrLcn(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Sadhana Sourabha Wing"
                            variant="standard"
                            fullWidth
                            value={saadhSaourWng}
                            onChange={(e) => setSaadhSaourWng(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Sadhana Sourabha Year Location"
                            variant="standard"
                            fullWidth
                            value={saadhSaourYrLcn}
                            onChange={(e) => setSaadhSaourYrLcn(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Roles"
                            variant="standard"
                            fullWidth
                            value={rls}
                            onChange={(e) => setRls(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Committee"
                            variant="standard"
                            fullWidth
                            value={cmite}
                            onChange={(e) => setCmite(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Other Interests"
                            variant="standard"
                            fullWidth
                            value={othInts}
                            onChange={(e) => setOthInts(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Declaration"
                            variant="standard"
                            fullWidth
                            value={decln}
                            onChange={(e) => setDecln(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Interested To Volanteer"
                            variant="standard"
                            fullWidth
                            value={intrsToVlntr}
                            onChange={(e) => setIntrsToVlntr(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="How You Want To Volanteer"
                            variant="standard"
                            fullWidth
                            setHwYuWntToVlntr
                            value={hwYuWntToVlntr}
                            onChange={(e) => setHwYuWntToVlntr(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Enabled"
                            variant="standard"
                            fullWidth
                            value={enbld}
                            onChange={(e) => setEnbld(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Time Stamp"
                            variant="standard"
                            fullWidth
                            value={tmStmp}
                            onChange={(e) => setTmStmp(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Wing"
                            variant="standard"
                            fullWidth
                            value={wng}
                            onChange={(e) => setWng(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Batch"
                            variant="standard"
                            fullWidth
                            value={bth}
                            onChange={(e) => setBth(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Jilla Completion Status"
                            variant="standard"
                            fullWidth
                            value={jilCompSts}
                            onChange={(e) => setJilCompSts(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Prantha Completion Status"
                            variant="standard"
                            fullWidth
                            value={pranCompSts}
                            onChange={(e) => setPranCompSts(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>

                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Pragtha Completion Status"
                            variant="standard"
                            fullWidth
                            value={pragCompSts}
                            onChange={(e) => setPragCompSts(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={4} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Sadhna Sourabha Completion Status"
                            variant="standard"
                            fullWidth
                            value={sadhSourCompSts}
                            onChange={(e) => setSadhSourCompSts(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDTypography type="text" variant="standard" fullWidth>
                          <MDInput
                            type="text"
                            label="Aatmaanusandhana Completion Status"
                            variant="standard"
                            fullWidth
                            value={aatmSandhCompSts}
                            onChange={(e) => setAatmSandhCompSts(e.target.value)}
                          />
                        </MDTypography>
                      </Grid>
                    </Grid>
                    <MDBox mt={4} mb={1}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <MDButton
                          href="/yogabandhus"
                          sx={{
                            width: "10rem",
                            backgroundColor: "orangered",
                            color: "black!important",
                          }}
                        >
                          Save
                        </MDButton>
                        <MDButton
                          href="/yogabandhus"
                          sx={{
                            width: "10rem",
                            backgroundColor: "orangered",
                            color: "black!important",
                          }}
                        >
                          Cancel
                        </MDButton>
                      </div>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
      {/* </form> */}
    </DashboardLayout>
  );
}

export default DetailedPage;
