import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import { Button } from "@mui/material";
// import { getCurrency } from "../../utils/getCurrency";

export default function ProductCard({ img, title, price, description }) {
  console.log({ img, title, price, description });
  const [count, setCount] = React.useState(0);
  // eslint-disable-next-line
  const [show, setShow] = React.useState(true);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="mainCard">
      <Card sx={{ display: "flex", position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={img}
          alt="image not found"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h3" color="text.secondary">
              {price}
            </Typography>
            <div className="counter">
                <RemoveIcon
                  onClick={handleDecrement}
                  style={{ cursor: "pointer" }}
                />

              <Typography variant="h5" color="text.secondary">
                {count}
              </Typography>
                <AddIcon
                  onClick={handleIncrement}
                  style={{ cursor: "pointer" }}
                />
            </div>
            <Typography variant="p" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
