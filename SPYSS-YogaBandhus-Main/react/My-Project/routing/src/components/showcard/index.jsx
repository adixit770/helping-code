import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "../form";

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

export default function ShowCard({
  name,
  email,
  avatar,
  id,
  getData,
  setCurrentId,
  currentId
}) {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const deleteopen = () => setOpen(true);
  const deleteClose = () => setOpen(false);
  const editopen = () => setOpenEdit(true);
  const editClose = () => setOpenEdit(false);

  const removeData = () => {
    fetch(`https://62de1a3c79b9f8c30ab314ef.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          getData();
          deleteClose();
        }
        throw response;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 450, marginBottom: "8px" }}>
          <CardMedia
            component="img"
            height=""
            image={avatar}
            alt="no-image-found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={`/user/${id}`}>
              <Button size="small">Learn More</Button>
            </NavLink>
            <DeleteIcon style={{ cursor: "pointer" }} onClick={deleteopen} />

            <EditIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCurrentId(id);
                editopen();
              }}
            />
          </CardActions>
        </Card>
      </div>
      <div className="edit">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openEdit}
          onClose={editClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openEdit}>
            <Box sx={style}>
              <Form id={currentId}/>
            </Box>
          </Fade>
        </Modal>
      </div>
      <div className="delete">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={deleteClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography variant="caption">Are you want to delete</Typography>
              <Button variant="contained" color="success" onClick={removeData}>
                Yes
              </Button>
              <Button variant="contained" color="error" onClick={deleteClose}>
                No
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
