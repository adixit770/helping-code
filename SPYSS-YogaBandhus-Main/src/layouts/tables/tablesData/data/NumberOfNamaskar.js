/* eslint-disable */
// / eslint-disable react/prop-types /
// / eslint-disable react/function-component-definition /
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

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import { FaPrayingHands } from "@react-icons/all-files/fa/FaPrayingHands";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Images
// import team2 from "assets/images/team-2.jpg";
import { useEffect, useState } from "react";
// import { CircularProgress } from "@mui/material";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function NumberOfNamaskarDataTable() {
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  // const Author = ({ image, name, email }) => {
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>

  // api
  const [loading, setLoading] = useState(false);
  const [valaya, setValaya] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getData = () => {
    setLoading(true);
    fetch("https://62e28e76e8ad6b66d85e4d11.mockapi.io/events")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        console.log("Namarkar",json)
        const temp = [];
        json.map((j, i) => {
          temp.push({
            Id: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Id}
              </MDTypography>
            ),
            name: (
 <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                {j.EventName}
              </MDTypography>
            ),
            namaskar: <MDTypography variant="caption">{j.EventName}</MDTypography>,
            count: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                <div style={{ fontSize: "2em", color: "orangered", borderRadius: "6px" }}>
                  {/* <FaPrayingHands /> */}
                </div>{" "}
                {j.CountOfNamaskars}
                {/* {/ <h4 style={{ position: "relative", left: "28px", bottom: "23px" }}>{j.CountOfNamaskars}</h4> /} */}
              </MDTypography>
            ),
            upa: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                Come say hello at our office
              </MDTypography>
            ),
            valaya: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Valaya}
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
                {j.City}
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
                {j.District}
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
                {j.State}
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
                {j.Country}
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
                {j.Wing}
              </MDTypography>
            ),

            actions: (
              <>
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  <div style={{ fontSize: "2em", color: "orangered", borderRadius: "6px" }}>
                    <EditIcon
                      onClick={() => {
                        setCurrentId(i);
                        handleEditOpen();
                      }}
                    />
                  </div>{" "}
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  <div style={{ fontSize: "2em", color: "orangered", borderRadius: "6px" }}>
                    <DeleteIcon />
                  </div>{" "}
                </MDTypography>
              </>
            ),
          });
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

  useEffect(() => {
    getData();
  }, []);

  // if (loading) {
  //   return <CircularProgress />
  // }

  // const All = ({ image }) => <MDAvatar src={image} size="sm" />;

  // const [loading, setLoading] = useState(false);
  // // const [data, setData] = useState([]);
  // const getData = () => {
  //   setLoading(true);
  //   fetch("https://62e10a7afa8ed271c48d04e4.mockapi.io/food")

  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw res;
  //     })
  //     .then((json) => {
  //       // setData(json);
  //       console.log(json)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  // if (loading) {
  //   return <CircularProgress />
  // }

  //     return data && data.length ? (
  //     data.map((d, index) => {

  //       return <ProductCard key={index}  {...d} />;
  //     })
  //   ) : (
  //     <div> No data found </div>
  //   );
  // };

  return {
    columns: [
      { Header: "Id", accessor: "Id", width: "1%", align: "left" },
      { Header: "Event name", accessor: "name", width: "45%", align: "left" },
      { Header: "Type of Namaskar's", accessor: "namaskar", align: "left" },
      { Header: "Count of Namaskar's", accessor: "count", align: "left" },
      { Header: "Upa Valaya(Area)", accessor: "upa", align: "left" },
      { Header: "Valaya(Group of Areas)", accessor: "valaya", align: "left" },
      { Header: "City/Town", accessor: "city", align: "left" },
      { Header: "District", accessor: "district", align: "left" },
      { Header: "State", accessor: "state", align: "left" },
      { Header: "Country", accessor: "country", align: "left" },
      { Header: "Wing", accessor: "wing", align: "left" },
      { Header: "Actions", accessor: "actions", align: "left" },
    ],

    rows: valaya,
    handleEditClose,
    handleEditOpen,
    editOpen,
    currentId,
    loading,
  };
}
