import ShowDetail from "../showDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

export default function CardDetails() {
  const { id } = useParams();
  const [cardDeatail, setCardDeatail] = useState(null);
  const [loader,setLoader]=useState(true)
  const getData=async()=>{
    await fetch(`https://62de1a3c79b9f8c30ab314ef.mockapi.io/users/${id}`)
    .then(response=>{
      if(response.ok){
      return response.json(); 
      }
      throw response;
    })
    .then((json)=>{ setCardDeatail(json);
    })
    .catch((err)=>err)
    .finally(()=>{setLoader(false)})
  }
  useEffect(() => {
   getData()
    
    // eslint-disable-next-line
  }, [cardDeatail]);

  if(loader){
    return <div>
      <CircularProgress color="success" />
    </div>
  }
  return cardDeatail ? <ShowDetail cardDeatail={cardDeatail} /> : <>"Nodata"</>;
}
