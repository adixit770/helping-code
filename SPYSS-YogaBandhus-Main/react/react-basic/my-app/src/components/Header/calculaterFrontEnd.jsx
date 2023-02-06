import React from "react";
class FrontEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          transform: "rotate(5deg)",
          boxShadow:"#857867 10px 10px",
          background: "burlywood",
          height: "84px",
          borderRadius: "24px",
          border: "2px solid",
          position: "absolute",
          left: "40rem",
          top: "50px",
          width: "247px",
          textAlign: "end",
        }}
      >
        <h1>{this.props.operandValue}</h1>
      </div>
    );
  }
}

export default FrontEnd;
