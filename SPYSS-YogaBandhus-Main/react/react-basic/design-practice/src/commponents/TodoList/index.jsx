import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import ShowTodoList from "./ShowTodoList";
import ShowCompletedList from "./ShowCompletedList";
import ShowAllList from "./ShowAllList";
import NoDataFound from "./NoDataFound";
import Tabs from "./Tabs";

const TodoList = () => {
  const [textField, setTextField] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const upDateCheck = (index, checked) => {
    let tempData = todoList;
    tempData[index].check = checked;
    setTodoList(tempData);
  };
  const updateType =  (index) => {
    const newState = todoList.map((obj,i) => {
      if (i === index) {
        return {...obj, type: 'completed'};
      }

      return obj;
    });
    console.log("old => ",newState)
    setTodoList(newState);
  };
  return (
    <>
      <div className="input-container" style={{ margin: "16px auto" }}>
        <TextField
          id="outlined-basic"
          label="Add your todo"
          variant="outlined"
          value={textField}
          onChange={(e) => {
            setTextField(e.target.value);
          }}
        />
        <Button
          variant="contained"
          style={{ padding: "15px", marginLeft: "8px" }}
          onClick={() => {
            setTodoList([
              ...todoList,
              { name: textField, check: false, type: "todo" },
            ]);
            setTextField("");
          }}
        >
          Add
        </Button>
      </div>
    
      <Tabs changeTab={setActiveTab} active={activeTab} />

      {activeTab === 1 ? (
        <div style={{ margin: "32px", textAlign: "left" }}>
          {todoList.length ? (
            <ShowTodoList
              data={todoList}
              upDateCheck={upDateCheck}
              updateType={updateType}
              setList={setTodoList}
            />
          ) : (
            <NoDataFound />
          )}
        </div>
      ) : activeTab === 2 ? (
        <div style={{ margin: "32px", textAlign: "center" }}>
          {todoList.length ? (
            <ShowCompletedList data={todoList} />
          ) : (
            <NoDataFound />
          )}
        </div>
      ) : activeTab === 3 ? (
        <div style={{ margin: "32px", textAlign: "right" }}>
          {todoList.length ? <ShowAllList data={todoList} /> : <NoDataFound />}
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
