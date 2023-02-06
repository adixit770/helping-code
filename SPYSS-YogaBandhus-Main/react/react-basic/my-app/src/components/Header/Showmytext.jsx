import React from "react";
class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
        render() {
          return (
           
              <div className="main">
                <h1 style={{color:this.props.color}}> This Is My Text</h1>
              </div>
     
          );
        }
      }
      
      export default Show;
    