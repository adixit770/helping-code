import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Fab,
  Modal,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import MediaCard from "../MediaCard";
import AddIcon from "@mui/icons-material/Add";
import FormDemo from "../FormDemo";

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const notify = (msg) => {
    console.log("msg");
    return toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [loading, setLoading] = useState(false);
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
  const getPost = () => {
    setLoading(true);
    fetch("https://62de1a3c79b9f8c30ab314ef.mockapi.io/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        console.log(json);
        setPosts(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getPost();
  }, []);

  const removeItem = (id) => {
    setLoading(true);
    fetch(`https://62de1a3c79b9f8c30ab314ef.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          getPost();
          notify("Delete Successfully");
        }
        throw response;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <MainLayout>
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <CircularProgress />
        </div>
      ) : (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ToastContainer />
          {posts &&
            posts.length &&
            posts.map((post, index) => (
              <MediaCard
                key={index}
                name={post.name}
                id={post.id}
                email={post.email}
                mobile={post.mobile}
                avatar={post.avatar}
                removeItem={removeItem}
              />
            ))}
        </Container>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormDemo setOpen={setOpen} getPost={getPost} />
        </Box>
      </Modal>

      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
        style={{ position: "fixed", bottom: "40px", right: "40px" }}
      >
        <AddIcon />
      </Fab>
    </MainLayout>
  );
};
export default AllBlogs;
