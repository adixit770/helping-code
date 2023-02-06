import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CompletedList = () => {
  const state = useSelector((state) => state);

  console.log("State=>", state);
  const {
    todolist: { completed: comp },
  } = state;
  console.log("List=>", comp);

  return (
    <div>
      <div>
        {comp.map((todo, index) => {
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
                  color: "white",
                }}
              >
                {index + 1}. {todo}
              </Typography>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default CompletedList;
