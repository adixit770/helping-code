import React from "react";
import FrontEnd from "./calculaterFrontEnd";
import calculaterData from "./calculaterData.json";
class Calculater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isOperatorClicked: false,
      operatorData: "",
      operandDataA: "",
      operandDataB: "",

      addvalue: (value, type) => {
        this.setState({ value: this.state.value + value });
        if (type === "operator") {
          this.setState({
            operatorData: this.state.operatorData + value,
            isOperatorClicked: true,
          });
          console.log(this.state.operatorData);
        }
        if (type === "clear") {
          this.setState({
            value: "",
            isOperatorClicked: false,
            operatorData: "",
            operandDataA: "",
            operandDataB: "",
          });
        }
        if (type === "equal" || type === "operator") {
          if (this.state.operatorData === "+") {
            let a = parseInt(this.state.operandDataA);
            let b = parseInt(this.state.operandDataB);
            let result = a + b;
            this.setState({
              operandDataA: result,
              value: result,
              operandDataB: "",
              operatorData: "",
            });
            console.log(this.state.operandDataA);
          }
          if (this.state.operatorData === "-") {
            let a = parseInt(this.state.operandDataA);
            let b = parseInt(this.state.operandDataB);
            let result = a - b;
            this.setState({
              operandDataA: result,
              value: result,
              operandDataB: "",
              operatorData: "",
            });
            console.log(this.state.operandDataA);
          }
          if (this.state.operatorData === "*") {
            let a = parseInt(this.state.operandDataA);
            let b = parseInt(this.state.operandDataB);
            let result = a * b;
            this.setState({
              operandDataA: result,
              value: result,
              operandDataB: "",
              operatorData: "",
            });
            console.log(this.state.operandDataA);
          }
          if (this.state.operatorData === "/") {
            let a = parseInt(this.state.operandDataA);
            let b = parseInt(this.state.operandDataB);
            let result = a / b;
            this.setState({
              operandDataA: result,
              value: result,
              operandDataB: "",
              operatorData: "",
            });
            console.log(this.state.operandDataA);
          }
        }
        if (type === "oprend") {
          if (this.state.operandDataA === "") {
            this.setState({
              operandDataA: this.state.operandDataA + value,
              isOperatorClicked: true,
              oprendValue: "",
            });
          } else {
            this.setState({
              operandDataB: this.state.operandDataB + value,
              isOperatorClicked: true,
              oprendValue: "",
            });
          }
        }
      },
    };
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
        <FrontEnd value={this.state.value} />
      </>
    );
  }
}

export default Calculater;
