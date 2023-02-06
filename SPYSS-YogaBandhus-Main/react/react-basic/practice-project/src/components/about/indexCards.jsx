import React from "react";
import Card from "./indexCard";
class Cards extends React.Component{
  constructor(props){
    super(props);
    this.state = {cardsData:[]};
  }
  static getDerivedStateFromProps(props){
    // console.log("cardsData:"+props.cardsData)
    return {cardsData: props.cardsData };
  }
  render(){
    const {cardsData} = this.state;
    return cardsData.map((card, index)=><Card key={index} data={card}/>);
  }
}

export default Cards;
