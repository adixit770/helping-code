import React from "react";
const ShowAllList = ({ data }) => {
  return (
    <>
      {data.map((listData, index) => {
        return (
          <div key={index}>
            {" "}
            {listData.name.charAt(0).toUpperCase() + listData.name.slice(1)}
          </div>
        );
      })}
    </>
  );
};
export default ShowAllList;
