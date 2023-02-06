import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const AllList = () => {
  const state = useSelector((state) => state);

  console.log("State=>", state);
  const {
    todolist: { allList: alllist },
  } = state;
  console.log("List=>", alllist);

  return (
    <div>
      <div>
        {alllist.map((todo, index) => {
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
                  background: "white",
                  marginInline: "0rem",
                  color: "black",
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
export default AllList;
