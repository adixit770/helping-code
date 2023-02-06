import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";
const HomeCards = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  console.log("cartDatajkjkjkjk => ",cartData.filter((dat)=>dat.quantity!==0))
  const [subTotal, setSubTotal] = useState(0);
  const history = useNavigate();

  const getData = () => {
    setLoading(true);
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (
    loading 
    )
   {
    return <CircularProgress />;
  }
  return (
    <>
      <div>
        {data && data.length  ? (
          data.map((d, index) => {
            return (
              <ProductCard
                key={index}
                index={index}
                {...d}
                setCartData={setCartData}
                cartData={cartData}
                subTotal={subTotal}
                setSubTotal={setSubTotal}
              />
            );
          })
        ) : (
          <>No data found</>
        )}
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
          onClick={() => history("/cart")}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default HomeCards;
