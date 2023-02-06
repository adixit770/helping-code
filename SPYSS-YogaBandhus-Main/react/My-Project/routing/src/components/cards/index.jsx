import { Box, Button, CircularProgress, Fade, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowCard from "../showcard";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Form from "../form";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

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

export default function Cards(id) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cardData, setcardData] = useState([]);
  const [currentId,setCurrentId]=useState()
  const [loader, setLoader] = useState(true);
  const getData =  () => {
     fetch("https://62de1a3c79b9f8c30ab314ef.mockapi.io/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        const newData = json.reverse()
        setcardData(newData );
      })
      .catch((err) => err)
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    getData();
  },[]);

  if (loader) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="main">
      <Button onClick={handleOpen}>
        <Fab color="success" aria-label="edit">
          <EditIcon />
        </Fab>
      </Button>
      {cardData.map((data, index) => {
        const { name, email, avatar, id } = data;
        return <ShowCard name={name} email={email} avatar={avatar} id={id} getData={getData} currentId={currentId} setCurrentId={setCurrentId}/>;
      })}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
        
            <Box sx={style}>
              <Form getData={getData}/>
            </Box>
        
        </Modal>
      </div>
    </div>
  );
}
