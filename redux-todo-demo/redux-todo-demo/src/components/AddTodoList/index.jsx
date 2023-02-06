import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Completed } from "../../Actions";

const AddTodoList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("State=>", state);
  const {
    todolist: { todo: list },
  } = state;
  console.log("List=>", list);

  return (
    <div>
      <div>
        {list.map((todo, index) => {
          console.log("TODO", todo);
          return (
            <>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "start",
                  padding: "1rem",
                  background: "black",
                  marginInline: "0rem",
                }}
              >
                {index + 1}. {todo}
                <Button
                  variant="contained"
                  onClick={() => dispatch(Completed(todo))}
                >
                  CompletedList
                </Button>
              </Typography>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default AddTodoList;
