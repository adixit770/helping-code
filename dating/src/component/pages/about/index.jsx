import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainLayout from "../../layout";
import data from "../about/data.json";
import Interests from "./interests";
export default function About() {
  // console.log(data);
  const [index, setIndex] = useState(0);

  const [interestData, setInterestData] = useState(data);
  const [singleData, setSingleData] = useState(data[index]);

  useEffect(() => {
    let temp = interestData;
    temp[index] = singleData;
    setInterestData(temp);
  }, [singleData]);
  useEffect(() => {
    setSingleData(data[index]);
  }, [index]);
  console.log("data => ", index);
  return (
    <>
      <MainLayout>
        <Container>
          <Interests
            allData={interestData}
            setInterestData={setInterestData}
            step={index}
            singleData={singleData}
            setSingleData={setSingleData}
          />
          <div style={{ textAlign: "center" }}>
            {index !== 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIndex(index - 1)}
              >
                Prev
              </Button>
            )}
            {index !== data.length - 1 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIndex(index + 1)}
              >
                Next
              </Button>
            )}
            {index === data.length - 1 && (
              <Button variant="contained" color="secondary">
                Continue
              </Button>
            )}
          </div>
        </Container>
      </MainLayout>
    </>
  );
}
