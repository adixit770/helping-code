import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  Avatar,
  Button,
  CircularProgress,
  Fab,
  Modal,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import FormDemo from "../FormDemo";
import AddIcon from "@mui/icons-material/Add";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function TableDemo() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "DP",
      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.value} />;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 110,
      editable: false,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 110,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 110,
      editable: false,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "8px",
            }}
          >
            {/* <Fab color="primary" aria-label="edit"> */}
            <EditIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCurrentId(params.value);
                setEditModal(true);
              }}
            />
            {/* </Fab> */}
            {/* <Fab color="secondary" aria-label="edit"> */}
            <DeleteIcon
              style={{ cursor: "pointer" }}
              //   onClick={() =>handleOpen removeData(params.value)}
              //   onClick={() =>handleOpen removeData(params.value)}
              onClick={() => {
                setCurrentId(params.value);
                setOpen(true);
              }}
            />
            {/* </Fab> */}
          </div>
        );
      },
    },
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [rows, setRows] = useState([]);

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleAddOpen = () => setOpenAdd(true);
  const handleAddClose = () => setOpenAdd(false);

  const handleEditClose = () => setEditModal(false);

  const getData = () => {
    fetch("https://62e0b9c898dd9c9df6160e86.mockapi.io/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        const newData = json.reverse();
        console.log(newData);
        setData(newData);
      })
      .catch((err) => {
        console.log("err -> ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const removeData = (id) => {
    setDeleteLoading(true);
    fetch(`https://62e0b9c898dd9c9df6160e86.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          getData();
        }
        throw res;
      })
      .catch((err) => {
        console.log("err -> ", err);
      })
      .finally(() => {
        setDeleteLoading(false);
        setOpen(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    let tempArr = [];
    data.map((d) => {
      const { id, name, avatar, email, mobile } = d;
      const temp = {
        id,
        avatar,
        name,
        email,
        mobile,
        actions: id,
      };
      tempArr = [...tempArr, temp];
    });
    setRows(tempArr);
  }, [data]);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you really want to delete?
          </Typography>
          <div
            style={{
              width: "100%",
              padding: "8px",
              display: "flex",
            }}
          >
            {deleteLoading && <CircularProgress />}{" "}
            <Button
              variant="contained"
              color="success"
              style={{ margin: "0 8px" }}
              onClick={() => removeData(currentId)}
            >
              Sure
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={editModal}
        onClose={() => setEditModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormDemo id={currentId} handleClose={handleEditClose} getData={getData}/>
        </Box>
      </Modal>
      <Modal
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormDemo handleClose={handleAddClose} getData={getData} />
        </Box>
      </Modal>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "absolute", bottom: "40px", right: "40px" }}
        onClick={handleAddOpen}
      >
        <AddIcon />
      </Fab>
      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          disableSelectionOnClick={true}
        />
      )}
    </Box>
  );
}
