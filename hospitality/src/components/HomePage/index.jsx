import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Tables from "../Tables";
import data from "../Tables/data.json";

const drawerWidth = 240;

function HomePage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  ///////////////////////////////////////////////////
  const [filtData, setFiltData] = React.useState([]);

  const [isSet, setIsSet] = React.useState(true);
  const checkCity = (e) => {
    const arr = e.target.value;
    const filteredResult = data.filter((list) => {
      return list.city.indexOf(arr) >= 0;
    });
    setFiltData(filteredResult);
  };

  // console.log(data[0].city);
  const funSearch = () => {
    setIsSet(false);
  };

  ///////////////////////////////////////////////////
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const CheckboxArray = [
    "Indore",
    
    "Mumbai",
    "Pune",
    "Nagpur",
    "Bhopal",
    "Ujjain",
    "Delhi",
    "Banglore",
    "Jaipur",
    "Jabalpur",
  ];
  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {CheckboxArray.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormControlLabel
                  control={
                    <Checkbox value={text} onChange={(e) => checkCity(e)} />
                  }
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "black",
          borderRadius: "0",
          margin: "auto",
        }}
        variant="contained"
        type="submit"
        onClick={funSearch}
      >
        Search
      </Button>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            sx={{ margin: "auto" }}
            noWrap
            component="div"
          >
            Detailed List
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Tables filtData={filtData} isSet={isSet} />
      </Box>
    </Box>
  );
}

HomePage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomePage;
