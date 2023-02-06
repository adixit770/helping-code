import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCards from "../ShowCards";

export default function Cards() {
  const [cartLoading, setCartLoading] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const history = useNavigate();
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previousData, setPreviousData] = useState([]);

  const getData = () => {
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        setCardData(json);
      })
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
      });
  };
  const getCartData = () => {
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/cart/1")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        setPreviousData(json.data);
      })
      .catch((err) => {
        console.log("47 err -> ", err);
      });
  };
  const insertData = () => {
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/cart/1", {
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        data: data.filter((temp) => temp.quantity !== 0),
      }),
    })
      .then((res) => {
        if (res.ok) {
          getData();
          history("/cart");
        }
        throw res;
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setCartLoading();
      });
  };
  useEffect(() => {
    getData();
    getCartData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <div className="main">
        {cardData.map((d, index) => {
            const isExist = previousData.find((pre) => pre.productId == d.id);
            console.log("isExist => ", isExist);
            if (isExist) {
          return (
            <ShowCards
              {...d}
              index={index}
              data={data}
              setData={setData}
              setSubTotal={setSubTotal}
              subTotal={subTotal}
              quantity={isExist.quantity}
            />
          );
          }
    
    return (
            <ShowCards
              {...d}
              index={index}
              data={data}
              setData={setData}
              setSubTotal={setSubTotal}
              subTotal={subTotal}  />
          );
        })}
      </div>
      <div>
        <Typography
          textAlign={"center"}
          variant="h3"
          fontWeight={"bold"}
          gutterBottom
        >
          Subtotal: {subTotal}
        </Typography>
        <Button
          variant="contained"
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px auto",
          }}
          onClick={() => {
            insertData();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
}
