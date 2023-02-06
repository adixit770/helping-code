import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Tabs from "./tab";
import ShowTodoList from "./showlist";
import ShowCompletedList from "./complelet";
import ShowAllList from "./allList";
import NoDataFound from "./nodata";
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
    setTodoList(newState);
  };
  return (
    <>
      <div className="input-container">
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
        <div>
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
        <div>
          {todoList.length ? (
            <ShowCompletedList data={todoList} />
          ) : (
            <NoDataFound />
          )}
        </div>
      ) : activeTab === 3 ? (
        <div>
          {todoList.length ? <ShowAllList data={todoList} /> : <NoDataFound />}
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
