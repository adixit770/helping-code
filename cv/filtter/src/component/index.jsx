import { useEffect, useState } from "react";
import Data from "./Data.json";
import ComboBox from "./suggestion";

const ShowDetailsPage = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const[addInput,setAddInput]= useState('')
  useEffect(() => {
    setData(Data);
  }, []);

  const AddData = () =>{
   
  }
  // console.log("mqmsw0=>", input);
  return (
    <div style={{ width: "100%" }}>
    
     <div>
        <h1
          style={{ background: "#2da19a", width: "16rem", marginLeft: "12rem" }}
        >
          All List
        </h1>
        <input
          type={"text"}
          style={{ marginLeft: "12rem" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {data
          .filter((d) => d.name.toUpperCase().includes(input.toUpperCase()))
          .map((value, index) => (
            <h1 key={index} style={{marginLeft:"2rem"}}>{value.name}</h1>,
            <ComboBox value ={value.name}/>
          ))}
          </div>
    </div>
  );
};
export default ShowDetailsPage;

