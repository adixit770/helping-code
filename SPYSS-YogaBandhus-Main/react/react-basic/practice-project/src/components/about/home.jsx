import React from "react";
import cardsData from "./cardsData.json";
import Cards from "./indexCards";

class Home extends React.Component {
  render() {
    // console.log(cardsData);
    return (
      <div className="card-container">
        <h1>List Of Shoes</h1>
        <Cards cardsData={cardsData} />
      </div>
    );
  }
}

export default Home;
