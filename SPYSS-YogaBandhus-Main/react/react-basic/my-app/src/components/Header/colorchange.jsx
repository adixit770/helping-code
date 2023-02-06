import "./color.css";
import React from "react";
class Color extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello how are you",

      Red: () => {
        let x = { color: "red" };
        this.setState({
          color: x,
        });
      },
      Blue: () => {
        let x = { color: "blue" };
        this.setState({
          color: x,
        });
      },
      Green: () => {
        let x = { color: "green" };
        this.setState({
          color: x,
        });
      },
      Gold: () => {
        let x = { color: "goldenrod" };
        this.setState({
          color: x,
        });
      },
      Aqua: () => {
        let x = { color: "aqua" };
        this.setState({
          color: x,
        });
      },
    };
  }

  render() {
    return (
      <>
        <div className="button">
          <button onClick={this.state.Red}>red</button>
          <button onClick={this.state.Blue}>blue</button>
          <button onClick={this.state.Green}>green</button>
          <button onClick={this.state.Gold}>gold</button>
          <button onClick={this.state.Aqua}>Aqua</button>
        </div>
        
        <div className="main">
          <h1 style={this.state.color}> {this.state.msg} </h1>
        </div>
      </>
    );
  }
}

export default Color;
