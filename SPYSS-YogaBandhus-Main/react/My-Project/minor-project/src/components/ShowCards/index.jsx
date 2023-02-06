import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { getCurrency } from "../../utils/getCurrency";

export default function ShowCart({
  id,
  index,
  image,
  title,
  price,
  description,
  setSubTotal,
  subTotal,
  data,
  setData,
  quantity,
}) {
  console.log({ image, title, price, description });
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (quantity) {
      setCount(quantity);
    }
  }, [quantity])

  React.useEffect(() => {

    const tempData = data;
    let isExist = tempData.find((temp) => {
      return temp.id === id;
    });
    console.log(tempData, "is => ", isExist);
    if (!isExist) {
      tempData.push({
        productId: id,
        title,
        price,
        image,
        description,
        index,
        quantity: count,
      });
    }
    else {
      tempData[isExist.index].quantity = count;
    }
    setData(tempData);
  }, [count]);

  return (
    <div className="mainCard">
      <Card sx={{ display: "flex", position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={image}
          alt="image not found"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h3" color="text.secondary">
              {getCurrency(price)}
            </Typography>
            {count === 0 ? (
              <Button
                variant="contained"
                onClick={() => {
                  setSubTotal(subTotal + parseInt(price));
                  setCount(1);
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
                    setCount(count - 1);
                  }}
                >
                  -
                </div>
                <Typography style={{ margin: "0 16px" }}>{count}</Typography>
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
                    setCount(count + 1);
                  }}
                >
                  +
                </div>
              </div>
            )}

            <Typography variant="p" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
