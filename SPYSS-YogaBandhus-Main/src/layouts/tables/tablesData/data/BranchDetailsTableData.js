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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BranchDetailsTableData() {
  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const [removeId, setRemoveId] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [branch, setBranch] = React.useState([]);
  const [currentId, setCurrentId] = React.useState("");

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const All = ({ image }) => <MDAvatar src={image} size="sm" />;

  const getData = () => {
    setLoading(true);
    fetch("https://62de2ce3ccdf9f7ec2d24977.mockapi.io/branch")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      //
      .then((json) => {
        console.log("BranchDetails=>",json)
        const temp = [];
        json.map((j, i) => {
          if (j.status !== "true") {
            temp.push({
              // Id: (
              //   <MDTypography
              //     component="a"
              //     href="#"
              //     variant="caption"
              //     color="text"
              //     fontWeight="medium"
              //   >
              //     {j.id}
              //   </MDTypography>
              // ),
              name: <Author image={team2} name={j.branchName} />,
              address: <Job title={j.branchAddress} />,
              timing: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                 05:00 pm
                </MDTypography>
              ),
              mobile: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.mobileNo}
                </MDTypography>
              ),
              group: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.city}
                </MDTypography>
              ),
              status: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  Active
                </MDTypography>
              ),
              city: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.district}
                </MDTypography>
              ),
              district: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.state}
                </MDTypography>
              ),
              state: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.country}
                </MDTypography>
              ),
              country: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.wing}
                </MDTypography>
              ),
              wing: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.valaya}
                </MDTypography>
              ),
              all: <All image={team2} />,
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
                      <EditIcon
                        onClick={() => {
                          setCurrentId(j.id);
                          handleEditOpen();
                        }}
                      />
                    </div>
                  </MDTypography>
                  <MDTypography
                    component="a"
                    href="#"
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                  >
                    <div style={{ fontSize: "2em", borderRadius: "6px" }}>
                      <DeleteIcon
                        onClick={() => {
                          setRemoveId(j.id);
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
        setBranch(temp);
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
    fetch(`https://62de2ce3ccdf9f7ec2d24977.mockapi.io/branch/${id}`, {
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
    console.log("167");
    if (removeId) {
      remove(removeId);
    }
  }, [removeId]);

  React.useEffect(() => {
    getData();
  }, []);
  return {
    columns: [
      { Header: "Branch Name", accessor: "name", width: "45%", align: "left" },
      { Header: "Timing", accessor: "timing", align: "left" },
      { Header: "Branch Address", accessor: "address", align: "left" },
      { Header: "Status", accessor: "status", align: "left" },
      { Header: "Contact No", accessor: "mobile", align: "left" },
      { Header: "Valaya(Group of Areas)", accessor: "group", align: "left" },
      { Header: "City/Town", accessor: "city", align: "left" },
      { Header: "District", accessor: "district", align: "left" },
      { Header: "State", accessor: "state", align: "left" },
      { Header: "Country", accessor: "country", align: "left" },
      { Header: "Actions", accessor: "actions", align: "left" },
    ],

    rows: branch,
    handleEditClose,
    handleEditOpen,
    editOpen,
    currentId,
    loading,
  };
}
