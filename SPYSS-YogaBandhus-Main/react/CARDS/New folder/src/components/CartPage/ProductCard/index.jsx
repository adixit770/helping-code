
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({
  id,
  title,
  price,
  image,
  description,
  subTotal,
  quantity,
  setSubTotal,
  setCartData,
  cartData=[],
  index,
}) {

  const [counter, setCounter] = React.useState(0);
  React.useEffect(()=>{
    setCounter(quantity)
    
  },[quantity])
  // React.useEffect(() => {
  //   const tempData = cartData;
  //   // console.log("yuyuyuy=> ", tempData);
  //   let isExist = tempData.find((temp) => temp.productId === id)
  //   console.log("is => ", isExist)
  //   if (!isExist) {
  //     tempData.push({
  //       productId:id,
  //       title,
  //       index,
  //       price,
  //       image,
  //       description,
  //       quantity: counter,
  //     })
  //   }
  //   else {
  //     tempData[isExist.index].quantity = counter
  //   }
  //   // setCartData(tempData)
  // }, [counter]);
  return (
    <Card sx={{ margin: "20px 16px" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          {price}
        </Typography>
        {counter === 0 ? (
          <Button
            variant="contained"
            onClick={() => {
              setSubTotal(subTotal + parseInt(price));
              setCounter(1);
            }}
          >
            Add
          </Button>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "grey",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setSubTotal(subTotal - parseInt(price));
                setCounter(counter - 1);
              }}
            >
              -
            </div>
            <Typography style={{ margin: "0 16px" }}>{counter}</Typography>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#eee",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setSubTotal(subTotal + parseInt(price));
                setCounter(counter + 1);
              }}
            >
              +
            </div>
          </div>
        )}
      </CardActions>
    </Card>
  );
}
