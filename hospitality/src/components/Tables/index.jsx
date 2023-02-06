import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "./data.json";
export default function Tables({ filtData, isSet }) {
  // console.log("FILETR PRINT + >", filtData);

  return isSet ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data1, index) => (
            // console.log(data),
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center" component="th" scope="row">
                {data1.name}
              </TableCell>
              <TableCell align="center">
                {data1.city.map((data, index) => {
                  return <div key={index}>{data}</div>;
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtData.map((fd, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{fd.name}</TableCell>
              <TableCell align="center">{fd.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
