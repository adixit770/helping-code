import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Fab, Modal, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
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
export default function MediaCard({
  name,
  email,
  id,
  mobile,
  avatar,
  removeItem,
}) {

  const [openDeleteModel, setOpenDeleteModel] = React.useState(false);
  return (
    <Card sx={{ maxWidth: 345, margin: "16px 8px", background: "#a9adfc" }}>
      <Avatar alt={name} src={avatar} style={{ margin: "20px auto" }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Name: </b>
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <b>Email: </b> {email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <b>Mobile: </b> {mobile}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <NavLink style={{ textDecoration: "none" }} to={`/user/${id}`}> */}
        <Tooltip title="Learn More" arrow>
          <Fab color="primary" aria-label="learn">
            <InfoIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <Fab
            color="primary"
            aria-label="delete"
            onClick={() => setOpenDeleteModel(true)}
          >
            <DeleteIcon  />
          </Fab>
        </Tooltip>
        <Tooltip title="Edit" arrow>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Tooltip>
      </CardActions>
      <Modal
        open={openDeleteModel}
        onClose={() => setOpenDeleteModel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Are you really want to delete?
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="success"
                size="small"
                variant="contained"
                onClick={() => removeItem(id)}
              >
                Yes
              </Button>
              <Button
                color="error"
                variant="contained"
                size="small"
                onClick={() => setOpenDeleteModel(false)}
              >
                Cancel
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </Card>
  );
}
