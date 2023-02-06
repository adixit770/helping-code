import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteRequest, getRequest } from "../api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Avatar } from "@mui/material";
import Form from "../form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,

};

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentID, setCurrentID] = React.useState();
  const [data, setData] = React.useState();
  const [currentData, setCurrentData] = React.useState();

  const getData = async () => {
    const value = await getRequest("/get");
    console.log("DIXIT=>", value);
    setData(value);
  };
  const getDataById = async () => {
    const value = await getRequest(`/getId/${currentID}`);
    console.log("DIXIT=>", value);
    if (value.length) {
      setCurrentData(value[0]);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (currentID) {
      getDataById();
      handleOpen();
    }
  }, [currentID]);

  // console.log("AMAN=>", data);
  const deleteData = async (id) => {
    await deleteRequest(`/delete/${id}`);
    getData();
  };

  return (
    <>
      <div>
        <Button onClick={handleOpen}>
          <AddBoxIcon />
        </Button>
        <Modal
          open={open}
          onClose={() => {
            handleClose();
            setCurrentData("");
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {currentID ? (
              <Form
                id={currentID}
                getData={getData}
                handleClose={handleClose}
                currentData={currentData}
                data={data}
              />
            ) : (
              <Form
                getData={getData}
                handleClose={handleClose}
                currentData={currentData}
                data={data}
              />
            )}
          </Box>
        </Modal>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Profile</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">MOBILE</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (

              <TableRow key={index}>
                  {console.log(row)}

                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                  {console.log(row.img)}
                  <Avatar alt="Remy Sharp" src={`http://localhost:8000/api/image/${row.img}`} />
                </TableCell>

                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                <TableCell align="right" style={{ cursor: "pointer" }}>
                  <EditIcon
                    onClick={() => {
                      setCurrentID(row.id);
                    }}
                  />
                  <DeleteIcon
                    onClick={() => {
                      setCurrentID(row.id);
                      deleteData(row.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
