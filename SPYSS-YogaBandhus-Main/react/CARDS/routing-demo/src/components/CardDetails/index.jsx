import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../DetailCard";
const CardDetails = () => {
  const { id } = useParams();

  const [cardDeatail, setCardDeatail] = useState(null);
  useEffect(() => {
    fetch("https://62de1a3c79b9f8c30ab314ef.mockapi.io/users"+id)
      .then((response) => response.json())
      .then((json) => {
        setCardDeatail(json);
      });
    // eslint-disable-next-line
  }, [cardDeatail]);
  return cardDeatail ? <DetailCard cardDeatail={cardDeatail} /> : <>"Nodata"</>;
};
export default CardDetails;
