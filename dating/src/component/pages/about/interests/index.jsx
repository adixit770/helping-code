import { Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
export default function Interests({
  singleData,
  setSingleData,
}) {
  const [selected, setSeleted] = useState([]);
  const { title, imgs, option, col } = singleData;
  useEffect(() => {
    console.log("selected -> ", selected);
  }, [selected]);
  return (
    <>
      <Container style={{ backgroundColor: "#2b2b37", margin: "8px" }}>
        <div
          style={{
            background: `url(${imgs})`,
            minHeight: "550px",
            textAlign: "center",
          }}
        >
          <div>
            <Typography variant="h5">{title}</Typography>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: col, gap: "20px" }}>
            {option.map((op, index) => {
              return (
                <Button
                  style={{
                    fontWeight: "600",
                    borderColor: "white",
                    color: "white",
                    margin: "8px",
                  }}
                  key={index}
                  variant={op.status ? "contained" : "outlined"}
                  onClick={() => {
                    let options = option;
                    options[index].status = !singleData.option[index].status;
                    let x = {
                      ...singleData,
                      option: options,
                    };
                    console.log("x => ", x);
                    setSingleData(x);
                  }}
                >
                  {op.name}
                </Button>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
