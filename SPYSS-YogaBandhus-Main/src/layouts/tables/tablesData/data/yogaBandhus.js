/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import * as React from "react";
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

export default function yogabandhusdata() {
  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const [loading, setLoading] = React.useState(true);
  const [yogabandhus, setYogaBandhus] = React.useState([]);
  const [currentId, setCurrentId] = React.useState("");
  const [removeId, setRemoveId] = React.useState("");

  // const Author = ({ image, name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">{email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  // const All = ({ image }) => <MDAvatar src={image} size="sm" />;

  const getData = async () => {
    await fetch("https://62e125d9fa99731d75cf5abd.mockapi.io/YogaBandhus")
      .then((res) => {
        if (res.ok) {
          // console.log("YOGABADHUS=>",res.json());
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        // console.log("JSON DATA=>",json)
        const temp = [];
        json.map((j) => {
          if (j.status !== "true") {
            temp.push({
              id: (
                <MDTypography
                  // style={{
                  //   overflow: "hidden",
                  //   display: "-webkit-box",
                  //   webkitLineClamp: "1",
                  //   webkitBoxOrient: "vertical",
                  // }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.yogaBandhuId}
                </MDTypography>
              ),
              firstname: (
                <MDTypography
                  style={{
                    cursor: "pointer",
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  className="nameHover"
                  href={`/detailedpage/${j.yogaBandhuId}`}
                  component="a"
                  // onClick={() => {
                  //   setCurrentId(j.yogaBandhuId);
                  // }}
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.firstName}
                </MDTypography>
              ),
              lastname: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.lastName}
                </MDTypography>
              ),

              gender: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.gender}
                </MDTypography>
              ),
              dob: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.dateOfBirth}
                </MDTypography>
              ),
              email: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.email}
                </MDTypography>
              ),
              langknown: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.languageKnown}
                </MDTypography>
              ),
              resofind: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.residentOfIndia}
                </MDTypography>
              ),
              priconno: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.primaryContactNumber}
                </MDTypography>
              ),
              highqual: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.highestQualification}
                </MDTypography>
              ),
              state: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.state}
                </MDTypography>
              ),
              valaya: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.valaya}
                </MDTypography>
              ),
              district: (
                <MDTypography
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "1",
                    webkitBoxOrient: "vertical",
                  }}
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.district}
                </MDTypography>
              ),
              actions: (
                <>
                  <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
                    <div
                      style={{
                        fontSize: "2em",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <DeleteIcon onClick={() => setRemoveId(j.yogaBandhuId)} />
                    </div>
                  </MDTypography>
                  <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
                    <div
                      style={{
                        fontSize: "2em",
                        borderRadius: "6px",
                        color: "orangered",
                        cursor: "pointer",
                      }}
                    >
                      <InfoIcon
                        onClick={() => {
                          setCurrentId(j.yogaBandhuId);
                          handleEditOpen();
                        }}
                      />
                    </div>
                  </MDTypography>
                </>
              ),
            });
          }
          return "";
        });
        setYogaBandhus(temp);
      })

      //
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const remove = (id) => {
    console.log("id+>", id);
    fetch(`https://62e125d9fa99731d75cf5abd.mockapi.io/YogaBandhus/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: "true" }),
    })
      .then((response) => {
        if (response.ok) {
          getData();
        }
        throw response;
      })

      .catch((err) => err);
  };

  React.useEffect(() => {
    // console.log("167");
    if (removeId) {
      remove(removeId);
    }
  }, [removeId]);

  React.useEffect(() => {
    getData();
  }, []);

  return {
    columns: [
      { Header: "Id", accessor: "id", width: "45%", align: "left" },
      { Header: "First Name", accessor: "firstname", width: "45%", align: "left" },
      { Header: "Last Name", accessor: "lastname", align: "left" },
      { Header: "Gender", accessor: "gender", align: "left" },
      { Header: "Date Of Birth", accessor: "dob", align: "left" },
      { Header: "Email", accessor: "email", align: "left" },
      { Header: "Language Known", accessor: "langknown", align: "left" },
      // { Header: "Resident Of India", accessor: "resofind", align: "left" },
      // { Header: "Primary Contact Number", accessor: "priconno", align: "left" },
      // { Header: "Highest Qualification", accessor: "highqual", align: "left" },
      // { Header: "State", accessor: "state", align: "left" },
      // { Header: "Valaya", accessor: "valaya", align: "left" },
      // { Header: "District", accessor: "district", align: "left" },
      { Header: "Actions", accessor: "actions", align: "left" },
    ],

    rows: yogabandhus,
    handleEditClose,
    handleEditOpen,
    editOpen,
    currentId,
    loading,
  };
}
