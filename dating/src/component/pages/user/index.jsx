import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Container } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MainLayout from '../../layout'


const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    date: yup.date().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
  })
  .required();

export default function User() {
  const list = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const list2 = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const list3 = [
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
  ];

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [age, setAge] = React.useState("");
  const [day, setDay] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleChangeFn = (event) => {
    setAge(event.target.value);
  };
  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  console.log("errors-> ", errors);
  const onSubmit = (values) => {
    console.log("values-> ", values);
  };

  return (
    <MainLayout>
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundImage: "url(Ellipse.png)",
          backgroundRepeat: "no-repeat",
          width: "12rem",
          height: "12rem",
          position: "relative",
          display: " flex",
          margin: " auto",
          top: "4rem",
        }}
      >
        <div style={{ margin: " auto" }}>
          <img src="SLR Camera.png" />
        </div>
      </Box>
      <form
        style={{
          marginInline: "auto",
          border: "1px solid transparent",
          margin: "60px 48px",
          position: "relative",
          top: "33px",
          background: "#0F4E88",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ flexGrow: 1, padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid sm={12} xs={12} md={12} lg={6}>
              <TextField
                className="App"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  border: "none",
                }}
                {...register("name")}
                error={!!errors?.name?.message}
                helperText={errors?.name?.message}
              />
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  border: "none",
                }}
                {...register("name")}
                error={!!errors?.name?.message}
                helperText={errors?.name?.message}
              />
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">DD</InputLabel>
                <Select
                  style={{ background: "white" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChangeFn}
                >
                  {list.map((data, index) => {
                    return (
                      <MenuItem value={data} key={index}>
                        {data}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">MM</InputLabel>
                <Select
                  style={{ background: "white" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Age"
                  onChange={handleChangeDay}
                >
                  {list2.map((data, index) => {
                    return (
                      <MenuItem value={data} key={index}>
                        {data}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">DD</InputLabel>
                <Select
                  style={{ background: "white" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Age"
                  onChange={handleChangeYear}
                >
                  {list3.map((data, index) => {
                    return (
                      <MenuItem value={data} key={index}>
                        {data}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={6}>
              <TextField
                className="App"
                id="outlined-basic"
                label="Location"
                variant="outlined"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  border: "none",
                }}
                {...register("name")}
                error={!!errors?.name?.message}
                helperText={errors?.name?.message}
              >
                Name
              </TextField>
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} style={{ background: "white" }}>
                  <TimePicker
                    label="Time of Birth"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              <Grid sm={12} xs={12} md={12} lg={6}>
                <FormControlLabel
                  style={{ color: "white", width: " 8rem" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="Time is unknown"
                />
              </Grid>
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12}>
              <TextField
                className="App"
                id="outlined-basic"
                label="Tell us about yourself"
                variant="outlined"
                maxRows={4}
                style={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "white",
                  border: "none",
                }}
                {...register("name")}
                error={!!errors?.name?.message}
                helperText={errors?.name?.message}
              />
            </Grid>
          </Grid>
        </Box>
      <Grid className="p-1 text-center" sm={12} xs={12} md={12} lg={12}>
        <Button
        type="submit"
        variant="contained"
        className="mx-3"
        style={{ background: "#AA0C7E" }}
        >
          Save
        </Button>
      </Grid>
          </form>
    </Container>
    </MainLayout>
  );
}
