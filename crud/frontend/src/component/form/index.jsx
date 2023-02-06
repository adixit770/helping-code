import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CardMedia, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { postImage, postRequest, putRequest } from "../api";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  mobile: yup.string().required(),
  password: yup.string().required(),
  file: yup.mixed().nullable().required("A file is required"),
});
export default function Form({ id, getData, handleClose, currentData, data }) {
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", mobile: "", password: "" },
  });
  const file = watch("file");
  const onSubmit = async (value) => {
    const { name, email, mobile, password, file } = value;
    const formData = new FormData();
    formData.append("image", file[0]);
    const response = await postImage("/upload", formData);
    console.log("response", response);
    let temp = {
      id: id ? id : data.length + 1,
      img: file[0].name,
      name,
      email,
      mobile,
      password,
    };
    const res = id
      ? await putRequest(`/update/${id}`, temp)
      : await postRequest("/submit", temp);

    handleClose();
    console.log("res", res);

    getData();
    reset();
  };
  console.log("file=>", file);
  useEffect(() => {
    console.log(currentData, id);
    const { name, email, mobile, password } = currentData || {};
    if (id) {
      setValue("name", name);
      setValue("email", email);
      setValue("mobile", mobile);
      setValue("password", password);
    }
  }, [id, currentData]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              type="text"
              label="Name"
              name="Name"
              variant="outlined"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
              style={{
                position: "relative",
                top: "35px",
                right: "-18px",
                width: "50%",
              }}
            >
              Name
            </TextField>
            <TextField
              type="email"
              label="Email"
              name="Email"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              style={{
                position: "relative",
                top: "35px",
                right: "-18px",
                width: "50%",
              }}
            >
              Email
            </TextField>

            <TextField
              type="text"
              label="Mobile"
              name="Mobile"
              variant="outlined"
              {...register("mobile")}
              error={!!errors.mobile}
              helperText={errors.mobile ? errors.mobile.message : ""}
              style={{
                position: "relative",
                top: "35px",
                right: "-18px",
                width: "50%",
              }}
            >
              Mobile
            </TextField>
            <TextField
              type="password"
              label="Password"
              name="Password"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              style={{
                position: "relative",
                top: "2rem",
                right: "-19px",
                width: "50%",
              }}
            >
              Password
            </TextField>
            <TextField
              type="file"
              label="Upload"
              name="file"
              variant="outlined"
              {...register("file")}
              error={!!errors.file}
              helperText={errors.file ? errors.file.message : ""}
              style={{
                position: "relative",
                top: "2rem",
                right: "-19px",
                width: "50%",
              }}
            >
              file
            </TextField>
            <div>
              {file && file[0] && (
                <CardMedia
                  style={{
                    width: "21rem",
                    position: "relative",
                    left: "20px",
                    top: "3rem",
                  }}
                  component="img"
                  height="194"
                  image={URL.createObjectURL(file[0])}
                  alt="Paella dish"
                />
              )}
            </div>

            <Button
              type="submit"
              variant="contained"
              style={{
                position: "relative",
                top: -"13rem",
                left: "26rem",
                width: "14rem",
              }}
            >
              submit
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}
