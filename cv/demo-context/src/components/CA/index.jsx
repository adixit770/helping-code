import { useContext } from "react";
import userNameContext from "../../context/userContext";
const CA = () => {
  return (
    <userNameContext.Consumer>
      {(userDetail) => {
        return <div>hello {userDetail?.name}</div>;
      }}
    </userNameContext.Consumer>
  );
};
export default CA;
