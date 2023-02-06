import React from "react";
class ArrowDemo extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    //     this.myFunction = () => {
    //         console.log("hello")
    //     }
      
    // }
     myNewFunction() {
        console.log("hhghghghgh")
    }
    render() {
        return (<><div onClick={this.myFunction}>hello</div>
            <div onClick={this.myNewFunction}>new</div></>)
    }
}

export default ArrowDemo