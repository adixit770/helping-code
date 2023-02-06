import { CircularProgress, Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import MediaCard from "../MediaCard";
const Cards = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    console.log("before");
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        console.log("mid -> ", json);
        setCardData(json);
      })
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
      });
    console.log("after");
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      {console.log("cardData - > ", cardData)}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {cardData && cardData.length ? (
          cardData?.map((data, index) => {
            const { title } = data;
            return <MediaCard title={title} id={index + 1} />;
          })
        ) : (
          <h1>Data not found</h1>
        )}
      </Container>
    </>
  );
};
export default Cards;
