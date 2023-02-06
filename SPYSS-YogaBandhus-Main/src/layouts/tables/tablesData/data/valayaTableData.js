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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { useMaterialUIController } from "context";


// Images

export default function valayadata() {
  const [controller] = useMaterialUIController();

  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const {token} = controller;
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

  const [loading, setLoading] = useState(false);
  const [valaya, setValaya] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [removeId, setRemoveId] = useState("");

  const getData = () => {
    setLoading(true);
    fetch("http://spyss.dollopinfotech.com/valaya/?page=0&size=55",{
      headers: {
        "Content-type": "application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`

      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        console.log(`Bearer ${token}`);

        const temp = [];
        json.response.valayas.map((j) => {
          if (j.deleted !== true) {
            temp.push({
              Id: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.valayaId}
                </MDTypography>
              ),
              name: <Author name={j.valayaName} />,

              District: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.valayaDistricts}
                </MDTypography>
              ),
              Description: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {j.valayaDescription}
                </MDTypography>
              ),
              actions: (
                <>
                  <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
                    <div
                      style={{
                        fontSize: "2em",
                        borderRadius: "6px",
                        color: "orangered",
                        cursor: "pointer",
                      }}
                    >
                      <EditIcon
                        onClick={() => {
                          setCurrentId(j.valayaId);
                          handleEditOpen();
                        }}
                      />
                    </div>
                  </MDTypography>
                  <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
                    <div
                      style={{
                        fontSize: "2em",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <DeleteIcon onClick={() => setRemoveId(j.valayaId)} />
                    </div>
                  </MDTypography>
                </>
              ),
            });
          }
          return "";
        });
        setValaya(temp);

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const remove = (id) => {
    console.log("id+>", id);
    fetch(`http://spyss.dollopinfotech.com/valaya/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        if (response.ok) {
          getData();
        }
        throw response;
      })

      .catch((err) => err);
  };
  useEffect(() => {
    if (removeId) {
      remove(removeId);
    }
  }, [removeId]);

  useEffect(() => {
    getData();
  }, []);


  return {
    columns: [
      { Header: "valaya Id", accessor: "Id", width: "1%", align: "left" },
      { Header: "valaya Name", accessor: "name", align: "left" },
      { Header: "valaya District ", accessor: "District", align: "left" },
      { Header: "valaya Description", accessor: "Description", align: "left" },
      { Header: "actions", accessor: "actions", align: "left" },
    ],

    rows: valaya,
    handleEditClose,
    handleEditOpen,
    editOpen,
    currentId,
    loading,
  };
}
