import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormDemo = ({ id, handleClose, getData }) => {
  const { register, handleSubmit ,setValue} = useForm();
  const [loading,setLoading]=useState(false)
  const [getLoading,setGetLoading]=useState(false)
  console.log("id => ", id);
  useEffect(()=>{
if(id){
  setGetLoading(true)
  fetch(`https://62e0b9c898dd9c9df6160e86.mockapi.io/users/${id}`)
        .then((res) => {
          if (res.ok) {
          return res.json()
          }
          throw res;
        }).then((json)=>{
          setValue("name",json.name)
          setValue("email",json.email)
          setValue("mobile",json.mobile)

        })
        .catch((err) => console.log(err)).finally(()=>{
          setGetLoading(false)
        });
}
  },[])
  const onSubmit = (values) => {
    console.log(values);
    setLoading(true)
    if(id){
      fetch(`https://62e0b9c898dd9c9df6160e86.mockapi.io/users/${id}`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            getData();
            handleClose()
          }
          throw res;
        })
        .catch((err) => console.log(err)).finally(()=>{
          setLoading(false)
        });
    }else{
    fetch("https://62e0b9c898dd9c9df6160e86.mockapi.io/users", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          getData();
          handleClose()
        }
        throw res;
      })
      .catch((err) => console.log(err)).finally(()=>{
        setLoading(false)
      });
    }
  };
  if(getLoading){
    return <CircularProgress/>
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add your details
      </Typography>
      <TextField
        style={{ width: "100%", margin: "5px" }}
        type="text"
        label="Name"
        variant="outlined"
        {...register("name")}
      />

      <TextField
        style={{ width: "100%", margin: "5px" }}
        type="text"
        label="Email"
        variant="outlined"
        {...register("email")}
      />

      <TextField
        style={{ width: "100%", margin: "5px" }}
        type="text"
        label="Mobile"
        variant="outlined"
        {...register("mobile")}
      />
      <div
        style={{
          width: "100%",
          margin: "8px",
        }}
      >{loading&&<CircularProgress style={{marginRight:"8px"}}/>}
        <Button
          variant="contained"
          style={{ marginRight: "8px" }}
          color="success"
          type="submit"
        >
         {id?"Update": "Add"}
        </Button>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
export default FormDemo;
