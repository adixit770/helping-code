import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button, Typography } from '@mui/material'
import ProductCard from "../../components/CartPage/ProductCard";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const history = useNavigate()
  const getCartData = () => {
    setLoading(true);
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/cart")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        console.log("json => ", json[0].data)
        setData(json[0].data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getCartData();
  }, [])

  useEffect(() => {
    if (data && data.length) {
      let count = 0
      data.map((d) => {
        count += d.quantity * d.price
      })
      console.log(count)
      setSubTotal(count)
    }
  }, [data])
  // console.log("json => ", data)
  if (
    loading
  ) {
    return <CircularProgress />;
  }
  return <MainLayout> <>
    <div>
      {data && data.length ? (
        data.map((d, index) => {
          return (
            <ProductCard
              key={index}
              index={index}
              {...d}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
            />
          );
        })
      ) : (
        <><div>No data found</div><Button variant="contained" onClick={() => history('/')}>Go to Home</Button></>
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
      // disabled={cartLoading}
      >
        {false ? <CircularProgress /> : "Checkout"}
      </Button>
    </div>
  </></MainLayout>;
};
export default CartPage;
