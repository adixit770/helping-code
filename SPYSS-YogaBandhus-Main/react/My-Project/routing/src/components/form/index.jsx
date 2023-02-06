import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useForm } from "react-hook-form";

export default function Form({getData,id}) {
console.log(id);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if(id){
    fetch(`https://62de1a3c79b9f8c30ab314ef.mockapi.io/users/${id}`)
    .then((response) => {
      
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((json) => {
      setValue("name",json.name)
      setValue("email",json.email)
      setValue("mobile",json.mobile)
    })
    .catch((err) => err)
    }
    

  },[id])
  
  const onSubmit=(value)=>{
    console.log("value=>",value);
    //put
   if(id){

    fetch(`https://62de1a3c79b9f8c30ab314ef.mockapi.io/users/${id}`,{
      method:'PUT',
      headers:{
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(value)
    })
    .then((response) => {
      if (response.ok) {
        getData();
      }
      throw response;
    })
    
    .catch((err) => err)
   }

   //post
   else{  
    fetch("https://62de1a3c79b9f8c30ab314ef.mockapi.io/users",{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(value)
    })
    .then((response) => {
      if (response.ok) {
        getData();
      }
      throw response;
    })
    .catch((err) => err) 
  }
  }
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        justifyContent: "center",
        width: "50%",
        padding: "32px",
        background: "transparent",
      }}
      
    >
      
      <FormControl>
        name:
        <TextField
          id="outlined-basic"
          
          variant="outlined"
          style={{ marginBottom: "8px" }}
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
            pattern: {
              value: /^[a-zA-Z ]{2,30}$/,
              message: "wwwwww",
            },
          })}
        />
        {errors && errors.name && (
          <FormHelperText id="my-helper-text" error={true}>
            {errors.name.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        email:
        <TextField
          id="outlined-basic"
         
          variant="outlined"
          style={{ marginBottom: "8px" }}
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
          })}
        />
        {errors && errors.email && (
          <FormHelperText id="my-helper-text" error={true}>
            {errors.email.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        mobile:
        <TextField
          id="outlined-basic"
         
          variant="outlined"
          style={{ marginBottom: "8px" }}
          {...register("mobile", {
            required: {
              value: true,
              message: "mobile is required",
            },
          })}
        />
        {errors && errors.mobile && (
          <FormHelperText id="my-helper-text" error={true}>
            {errors.mobile.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        password:
        <TextField
          id="outlined-basic"
          
          type={"password"}
          variant="outlined"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
          style={{ marginBottom: "8px" }}
        />
        {errors && errors.password && (
          <FormHelperText id="my-helper-text" error={true}>
            {errors.password.message}
          </FormHelperText>
        )}
      </FormControl>
      <Button variant="contained" type="submit" color="success">
        Signup
      </Button>
    </form>
  );
}
