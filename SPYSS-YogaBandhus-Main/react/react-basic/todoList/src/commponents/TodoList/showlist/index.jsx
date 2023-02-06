import { Checkbox, Typography, Button } from "@mui/material";
import React from "react";

const ShowTodoList = ({ data, upDateCheck, updateType, setList }) => {
  const removeChecked =  () => {
   
    const newState = data.map(obj => {
      if (obj.check) {
        return {...obj, type: 'completed'};
      }
      return obj;
    });
    setList(newState);
  };
  return (
    <>
      {console.log("data -> ", data)}
      {data.map((listData, index) => {
        if (listData.type === "todo") {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              <Checkbox
                checked={listData.checked}
                onChange={(e) => upDateCheck(index, e.target.checked)}
              />
              <Typography key={index} variant="body1" fontWeight={"bold"}>
                {listData.name.charAt(0).toUpperCase() + listData.name.slice(1)}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "4px" }}
                onClick={() => updateType(index)}
              >
                Completed
              </Button>
            </div>
          );
        }
        return ""
      })}
      <Button onClick={() => removeChecked()}>Submit</Button>
    </>
  );
};
export default ShowTodoList;
