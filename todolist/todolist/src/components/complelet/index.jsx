
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
                {listData.name.charAt(0).toUpperCase() + listData.name.slice(1)}
           
            </div>
          );
        }
        return ""
      })}
    </>
  );
};
export default ShowCompletedList;
