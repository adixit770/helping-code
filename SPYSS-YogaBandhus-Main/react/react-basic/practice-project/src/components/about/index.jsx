import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:{}};
  }
  static getDerivedStateFromProps(props) {
    // console.log("data: "+props.data)
    return { data: props.data };
  }
  render() {
    const {data} = this.state;
    return (
      <div className="card">
        <img src={data.img} alt="Not found" style={{width: "400px"}} />
        <div className="text-container">
          <h2>{data.title}</h2>
          <h3>{data.subTitle}</h3>
          <h2>{data.price}</h2>
        </div>
      </div>
    );
  }
}

export default Card;