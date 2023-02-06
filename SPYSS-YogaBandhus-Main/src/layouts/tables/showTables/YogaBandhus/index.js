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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
// import projectsTableData from "layouts/tables/data/projectsTableData";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import yogabandhusdata from "layouts/tables/tablesData/data/yogaBandhus";
import YogaBandhusDetails from "layouts/authentication/sign-up/yogaBandhusModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  // boxShadow: 24,
  outline: "none",
  p: 4,
};

function YogaBandhus() {
  const { columns, rows, editOpen, handleEditClose, currentId } = yogabandhusdata();
  console.log("ROWS=>", rows);
  // const [editOpen, setEditOpen] = React.useState(false);
  // const handleEditOpen = () => setEditOpen(true);
  // const handleEditClose = () => setEditOpen(false);
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose}
        sx={{ border: "none" }}
      >
        {/* <Fade in={open}> */}
        <Box sx={style}>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <YogaBandhusDetails id="" />
          </Typography>
        </Box>
        {/* </Fade> */}
      </Modal>
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
                  Yoga Bandhus Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/* <Button onClick={handleOpen}>Add Yoga Bandhus</Button> */}
                <DataTable
                  table={{ columns, rows }}
                  // isSorted={false}
                  // entriesPerPage={false}
                  // showTotalEntries={false}
                  // noEndBorder
                  canSearch
                />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
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
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={editOpen}
        onClose={handleEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <YogaBandhusDetails />
            </Typography>
          </Box>
        </Fade>
      </Modal> */}
      {/* {console.log("edit -> ",editOpen)} */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={editOpen}
        onClose={handleEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={editOpen}>
          <Box style={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* {console.log("Rows=>", rows)} */}
              <YogaBandhusDetails
                id={currentId}
                row={rows.filter((row) => row.id?.props?.children === currentId)[0]}
              />
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default YogaBandhus;
