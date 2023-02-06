import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp = /^[789][0-9]{9}$/;

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required("Email Required"),
    mobile: yup
      .string()
      .required("Mobile Required")
      .matches(phoneRegExp, "Phone number is not valid"),
    password: yup.string().required("Password Required"),
    confirmPassword: yup.string().required("Confirm Password Required"),
  })
  .required();
const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("erros-> ", errors);
  const onSubmit = (values) => {
    console.log("values-> ", values);
  };
  return (
    <form
      style={{
        width: "50%",
        marginTop:"100rem",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h3" style={{textAlign:"center" }} gutterBottom>
      Payment
      </Typography>
      <TextField
        type="text"
        name="name"
        variant="outlined"
        label="Name"
        margin="normal"
        {...register("name")}
        error={!!errors?.name?.message}
        helperText={errors?.name?.message}
      />
      <TextField
        type="email"
        name="email"
        variant="outlined"
        label="Email"
        margin="normal"
        {...register("email")}
        error={!!errors?.email?.message}
        helperText={errors?.email?.message}
      />
      <TextField
        type="text"
        name="mobile"
        variant="outlined"
        label="Mobile"
        margin="normal"
        {...register("mobile")}
        error={!!errors?.mobile?.message}
        helperText={errors?.mobile?.message}
      />
      <TextField
        type="password"
        name="password"
        variant="outlined"
        label="Password"
        margin="normal"
        error={!!errors?.password?.message}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <TextField
        type="password"
        name="confirmPassword"
        variant="outlined"
        label="Confirm Password"
        error={!!errors?.confirmPassword?.message}
        helperText={errors?.confirmPassword?.message}
        margin="normal"
        {...register("confirmPassword")}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
export default PaymentForm;
