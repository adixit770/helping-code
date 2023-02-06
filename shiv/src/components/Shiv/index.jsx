import * as React from "react";
import Switch from "@mui/material/Switch";

export default function ShivShankar() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      <img src= {checked?"Shivling Abhishek.gif":"shiv.png"}></img>
      
    </div>
  );
}
