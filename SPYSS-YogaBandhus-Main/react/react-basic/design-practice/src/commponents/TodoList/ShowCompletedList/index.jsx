import { Typography } from "@mui/material";
import React from "react";
const ShowCompletedList = ({ data }) => {
  return (
    <>
      {data.map((listData, index) => {
        if (listData.type === "completed") {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              <Typography key={index} variant="body1" fontWeight={"bold"}>
                {listData.name.charAt(0).toUpperCase() + listData.name.slice(1)}
              </Typography>
            </div>
          );
        }
        return ""
      })}
    </>
  );
};
export default ShowCompletedList;
