
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ShowCheckout from '../ShowCart';


export default function CheckCart() {
  const [loading, setLoading] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
 const [Cart,setCart]=useState([]);
  const getCartData = () => {
    fetch("https://62e8bb8293938a545bea1eb8.mockapi.io/cart")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        console.log(json[0].data)
        setCart(json[0].data);
      })
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
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
    <div className="main">
    {Cart.map((c, index) => {

      return (
        <ShowCheckout
          {...c}
          index={index}
          setSubTotal={setSubTotal}
          subTotal={subTotal}
        />
      );
    })}
  </div>
  )
  
}

