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
import valayaTableData from "layouts/tables/tablesData/data/valayaTableData";

// Data
// import projectsTableData from "layouts/tables/data/projectsTableData";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ValayaForm from "layouts/authentication/sign-up/valaya-form";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "60%",
  boxShadow: 24,
  p: 4,
};

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function Valaya() {
  const { columns, rows, currentId, handleEditClose, handleEditOpen, editOpen } = valayaTableData();
  const color = rows?"success":"error"
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handel = currentId ? editOpen : open;
  const close = currentId ? handleEditClose : handleClose;
  const hopen = currentId ? handleEditOpen : handleOpen;
  const [snackbar, setSnackbar] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={handel}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={handel}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {currentId ? (
                <ValayaForm
                  id={currentId}
                  row={rows.filter((row) => row.Id?.props?.children === currentId)[0]}
                  handleEditClose={handleEditClose}
                  setOpenSnackbar={setOpenSnackbar}
                  setSnackbar={setSnackbar}
                />
              ) : (
                <ValayaForm
                  id=""
                  handleClose={handleClose}
                  setOpenSnackbar={setOpenSnackbar}
                  setSnackbar={setSnackbar}
                />
              )}
            </Typography>
          </Box>
        </Fade>
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
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={1000}
                    onClose={handleCloseSnackbar}
                  >
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
                      {snackbar}
                    </Alert>
                  </Snackbar>
                  {/* <Alert onClose={handleCloseSnackbar} severity="error">{snackbar}</Alert> */}
                </Stack>
                <MDTypography variant="h6" color="white">
                  Valaya Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Button onClick={hopen}>Add Valaya</Button>
                <DataTable
                  table={{ columns, rows }}
                  canSearch
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Valaya;
