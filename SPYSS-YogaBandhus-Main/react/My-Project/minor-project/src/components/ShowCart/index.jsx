import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { getCurrency } from "../../utils/getCurrency";

export default function ShowCheckout({
 
  image,
  title,
  price,
  description,
  setSubTotal,
  subTotal,
}) {
  const [count, setCount] = React.useState(0);

  return  <div className="mainCard">
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
          <Button style={{position: "absolute",left: "79rem",top: "56px"}}
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
}
