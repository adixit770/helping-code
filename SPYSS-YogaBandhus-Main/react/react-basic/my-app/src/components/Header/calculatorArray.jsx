import React from "react";
import FrontEnd from "./calculaterFrontEnd";
import calculaterData from "./calculaterData.json";
class CalculaterArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operandValue: "",
      isOperatorClicked:false,
      operatorData: [],
      operandData: [],
      input:"",

      addvalue: (value,type) => {
        if(this.state.isOperatorClicked===false){
        this.setState({input:this.state.input+value})
        }
        if (type === "oprend") {
          this.setState({ operandValue: this.state.operandValue + value });
        }
        if (type === "operator") {
          this.setState({
            operandData: [...this.state.operandData, this.state.operandValue],
            operatorData: [...this.state.operatorData, value],
            operandValue: "",
            isOperatorClicked: true
          });
        }
        if(type==="clear"){
           this.setState({ operandValue: "",
           isOperatorClicked: false,
           operatorData: [],
           operandData: [],
           input:"",})
        }
        if(type==="equal")
        {
            const{operandData, operatorData,getval}=this.state
        let result=operandData[0];
        for(let i=0;i<operandData.length;i++)
        {
           result=getval(result,operandData[i+1],operatorData[i])
           
           }
        }
      },
        getval: () =>{
        
       
        }


      }
    }
  
  render() {
    return (
      <>
        <div
          style={{
            width: "19rem",
            height: "10rem",
            flexWrap: "wrap",
            display: "flex",
            position: "absolute",
            left: "40rem",
            top: "153px",
          }}
        >
          {calculaterData.map((data, index) => (
            <div
              key={index}
              style={{
                transform: "rotate(20deg)",
                boxShadow: "#857867 10px 10px",
                background: "burlywood",
                borderRadius: "24px",
                width: "60px",
                height: "60px",
                border: "2px solid",
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "fantasy",
              }}
              onClick={() => this.state.addvalue(data.value, data.type)}
            >
              {data.value}
            </div>
          ))}
        </div>
        <FrontEnd operandValue={this.state.input} />
      </>
    );
  }
}

export default CalculaterArray;
