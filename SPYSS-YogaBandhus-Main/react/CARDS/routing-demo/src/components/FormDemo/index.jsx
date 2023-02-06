import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const FormDemo = ({ setOpen,  getPost }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    setError,
    reset,
    resetField,
    setValue,
    setFocus,
  } = useForm({
    
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
 
  const onSubmit = (values) => {
    console.log("values -> ", values);
    const { name, email, mobile, password } = values;
    let temp = {
      name,
      email,
      mobile,
      password,
    };

    setLoading(true);
    fetch("https://62de1a3c79b9f8c30ab314ef.mockapi.io/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((response) => {
        if (response.ok) {
          setOpen(false);
           getPost()
      
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
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        justifyContent: "center",
        width: "100%",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" fontWeight={"bold"} gutterBottom>
        React Hook Form
      </Typography>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Name"
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
        <TextField
          id="outlined-basic"
          label="Email"
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
        <TextField
          id="outlined-basic"
          label="Mobile"
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
        <TextField
          id="outlined-basic"
          label="Password"
          type={showPassword ? "password" : "text"}
          variant="outlined"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
          InputProps={{
            endAdornment: showPassword ? (
              <RemoveRedEyeIcon
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityOffIcon
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              />
            ),
          }}
          style={{ marginBottom: "8px" }}
        />
        {errors && errors.password && (
          <FormHelperText id="my-helper-text" error={true}>
            {errors.password.message}
          </FormHelperText>
        )}
      </FormControl>
      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? <CircularProgress /> : "Signup"}
      </Button>
    </form>
  );
};

export default FormDemo;
