import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";
const HomeCards = () => {
  const [cartLoading, setCartLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previousData,setPreviousData]=useState([])
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
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

  const getCartData=()=>{
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/cart/1").then((res)=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((json)=>{
       setPreviousData(json.data)
    })
    .catch((err)=>{
      console.log("47 err -> ",err)
    })
  }
  const addToCart =  () => {
    const finalCartData = cartData && cartData.length && cartData.filter((data) => data.quantity !== 0)
    if (finalCartData && finalCartData.length) {
      console.log("finalCartData => ", finalCartData)
      setCartLoading(true)
        fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/cart/1", {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ data: [...previousData,...finalCartData] })
      }).then((res) => {
        if (res.ok) {
          console.log("data added successfully")
          history('/cart')
          return
        }
        throw res
      })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setCartLoading(false)
        })
      
    }
    else {
      console.log("Cart is empty")
    }
  }
  useEffect(() => {
    getData();
    getCartData();
  }, []);
console.log("pre => ",previousData)
  if (
    loading
  ) {
    return <CircularProgress />;
  }
  return (
    <>
      <div>
        {data && data.length&&previousData ? (
          data.map((d, index) => {
            const isExist=previousData.find((pre)=>pre.productId==d.id)
            console.log("isExist => ",isExist)
            if(isExist){
              return ( <ProductCard
                key={index}
                index={index}
                {...d}
                setCartData={setCartData}
                cartData={cartData}
                subTotal={subTotal}
                setSubTotal={setSubTotal}
                quantity={isExist.quantity}
              />)
            }
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
          disabled={cartLoading}
          onClick={addToCart}
        >
          {cartLoading ? <CircularProgress /> : "Add to Cart"}
        </Button>
      </div>
    </>
  );
};

export default HomeCards;
