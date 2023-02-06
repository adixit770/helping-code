import "./bulb.css";
import React from "react";
class Bulb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "bulbon.jpg",
    };
  }
  render() {
    return (
      <div className="container">
        {/* eslint-disable-next-line */}
        <img src={this.state.img} alt="No picture"  />
        <button
          onClick={() => this.setState({ img: "bulbon.jpg" }) }
          className="bulb"
        >
          on
        </button>
        <button
          onClick={() => this.setState({ img: "bulboff.jpg" })}
          className="bulb"
        >
          off
        </button>
      </div>
    );
  }
}

export default Bulb;