/* eslint-disable */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
// import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";
// import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

function Sidenav({ color, brand, routes, ...rest }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  // let textColor = "white";

  // if (transparentSidenav || (whiteSidenav && !darkMode)) {
  //   textColor = "dark";
  // } else if (whiteSidenav && darkMode) {
  //   textColor = "inherit";
  // }

  // const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, 
    // title, 
    noCollapse, key, href, route ,onlyRoute}) => {
    let returnValue;
    if(onlyRoute){
      return returnValue
    }

    if (type === "collapse") {
      returnValue = href ? (
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <Link
              href={href}
              key={key}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </Link>
          </Typography>
        </AccordionSummary>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </NavLink>
      );
    } else if (type === "branch") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse name={name} icon={icon} />
        </Link>
      ) : (
        <div>
          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <NavLink key={key} to={route}>
                  <SidenavCollapse name={name} icon={icon} />
                </NavLink>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <NavLink key={key} to="/branch2Dates">
                  <SidenavCollapse name="Between 2 Dates" icon={icon} />
                </NavLink>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <NavLink key={key} to="/branchstatus">
                  <SidenavCollapse name="Branch Status" icon={icon} />
                </NavLink>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <NavLink key={key} to="/batchwings">
                  <SidenavCollapse name="Batch Wings" icon={icon} />
                </NavLink>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <NavLink key={key} to="/branchdetails">
                  <SidenavCollapse name="Batch Details" icon={icon} />
                </NavLink>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    } else if (type === "event") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <div>
          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <SidenavCollapse name={name} icon={icon} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <NavLink key={key} to={route}>
                  <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
                </NavLink>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <NavLink key={key} to="/numberOfNamaskar">
                  <SidenavCollapse name="Namaskar" icon={icon} active={key === collapseName} />
                </NavLink>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    } else if (type === "valaya") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <div>
          <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <NavLink key={key} to={route}>
                  <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
                </NavLink>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    } else if (type === "yogabandhus") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <div>
          <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <SidenavCollapse name={name} icon={icon} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <NavLink key={key} to={route}>
                  <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
                </NavLink>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );

    }
    return returnValue;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <img
        style={{ width: "11rem", position: "relative", top: "8px" }}
        src="/logo.png"
        alt="NO Data Found"
      />

      <Divider />
      <List>{renderRoutes}</List>

      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
