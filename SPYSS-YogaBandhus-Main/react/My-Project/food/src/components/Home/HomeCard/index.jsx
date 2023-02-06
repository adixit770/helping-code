import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import ProductCard from '../ProductCard';


const HomeCard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getData = () => {
    setLoading(true);
    fetch("https://62e10a7afa8ed271c48d04e4.mockapi.io/food")
    
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        setData(json);
        console.log(json)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <CircularProgress />
  }

    return data && data.length ? (
    data.map((d, index) => {
      
      return <ProductCard key={index}  {...d} />;
    })
  ) : (
    <div> No data found </div>
  );
};
export default HomeCard;
