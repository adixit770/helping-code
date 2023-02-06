import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    Name: yup.string().required(),
 //   name: yup.string().required(),
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    postalCode: yup.number().required(),
  })
  .required();

export default function UserProfile() {
  const values = React.useContext(userContext);
  const { data, setData } = values;
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log("errors-> ", errors);
  const onSubmit = (values) => {
    console.log("values-> ", values);
    setData(values);
    history("/cv");
  };
  console.log("erro=>",errors );
  return (
    <form
      style={{
        marginInline: "auto",
        border: "1px solid transparent",
        margin: "60px 48px",
        position: "static",
        top: "80px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
        <Grid container spacing={2} style={{ marginTop: "70px" }}>
          <Grid sm={4} xs={12}>
            <TextField
              label="Name"
              variant="standard"
              style={{ width: "100%" }}
              {...register("Name")}
              error={!!errors?.Name?.message}
              helperText={errors?.Name?.message}
            >
              Name
            </TextField>
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField
              label="phone"
              variant="standard"
              style={{ width: "100%" }}
              {...register("phone")}
              error={!!errors?.phone?.message}
              helperText={errors?.phone?.message}
            >
              Phone NO
            </TextField>
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField
              label="Email"
              variant="standard"
              style={{ width: "100%" }}
              {...register("email")}
              error={!!errors?.email?.message}
              helperText={errors?.email?.message}
            >
              Email
            </TextField>
          </Grid>
          <Grid sm={6} xs={12}>
            <TextField
              label="Firstname"
              variant="standard"
              style={{ width: "100%" }}
              {...register("firstName")}
              error={!!errors?.firstName?.message}
              helperText={errors?.firstName?.message}
            >
              firstName
            </TextField>
          </Grid>
          <Grid sm={6} xs={12}>
            <TextField
              label="Lastname"
              variant="standard"
              style={{ width: "100%" }}
              {...register("lastName")}
              error={!!errors?.lastName?.message}
              helperText={errors?.lastName?.message}
            >
              lastName
            </TextField>
          </Grid>
          <Grid xs={12}>
            <TextField
              label="Address"
              variant="standard"
              style={{ width: "100%" }}
              {...register("address")}
              error={!!errors?.address?.message}
              helperText={errors?.address?.message}
            >
              address
            </TextField>
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField
              label="City"
              variant="standard"
              style={{ width: "100%" }}
              {...register("city")}
              error={!!errors?.city?.message}
              helperText={errors?.city?.message}
            >
              city
            </TextField>
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField
              label="Country"
              variant="standard"
              style={{ width: "100%" }}
              {...register("country")}
              error={!!errors?.country?.message}
              helperText={errors?.country?.message}
            >
              country
            </TextField>
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField
              label="Postalcode"
              variant="standard"
              style={{ width: "100%" }}
              {...register("postalCode")}
              error={!!errors?.postalCode?.message}
              helperText={errors?.postalCode?.message}
            >
              postalCode
            </TextField>
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ margin: "15px" }}>
          About Me
          <TextField
            variant="standard"
            label="Lamborghini Mercy,Your chick she so thirsty,I'm in that two seat lambo."
            style={{ width: "100%" }}
          />
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button variant="contained" type="submit" color="error">
            Update Profile
          </Button>
        </div>
      </Box>
    </form>
  );
}
