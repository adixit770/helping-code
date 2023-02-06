import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { TextField } from "@mui/material";

import AddTodo from "../../Actions";
import AddTodoList from "../AddTodoList";
import AllList from "../AllList";
import CompletedList from "../CompletedList";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TabAnimation.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const dispatch = useDispatch();

  //   const state = useSelector((state) => state);
  //   console.log("STATE=>", state);
  const {
    todolist: { todo: list, complete: comp },
  } = useSelector((state) => state);

  console.log("Add=>", list);
  console.log("Comp=>", comp);

  const [text, setText] = useState("");
  // console.log("TEXT=>", text);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   //////////////////////////////
  // eslint-disable-next-line
  const [mode, setMode] = React.useState("out-in");
  const [state, setState] = React.useState(true);
  const helloRef = React.useRef(null);
  const goodbyeRef = React.useRef(null);
  const nodeRef = state ? helloRef : goodbyeRef;
  //   /////////////////////////////

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        d="filled-basic"
        label="Add ToDo"
        variant="filled"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        variant="contained"
        type="submit"
        style={{ padding: "14px", width: "8rem", background: "white" }}
        onClick={() => {
          dispatch(AddTodo(text, setText("")));
          setState((state) => !state);
        }}
      >
        Add
      </Button>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          sx={{ width: "100%!important" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ToDo List" {...a11yProps(0)} />
          <Tab label="Completed List" {...a11yProps(1)} />
          <Tab label="All List" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <>
          <div className="main">
            <SwitchTransition mode={mode}>
              <CSSTransition
                key={state}
                nodeRef={nodeRef}
                addEndListener={(done) => {
                  nodeRef.current.addEventListener(
                    "transitionend",
                    done,
                    false
                  );
                }}
                classNames="fade"
              >
                <div ref={nodeRef} className="button-container">
                  <Button>
                    <AddTodoList />
                  </Button>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompletedList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AllList />
      </TabPanel>
    </Box>
  );
}
