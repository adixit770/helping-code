import React from "react";
import Show from "./Showmytext";

class Click extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           color:"",
addcolor:(background)=>{
    this.setState({color:background})
    console.log(this.state.color)
}
        }


    }
    render()
    {
        return(
            <>
        <div style={{width: "13rem", height: "13rem", flexWrap: "wrap", display :"flex"}} >
           
            <div style={{width:"50px",height:"50px",background: "red",border:"2px solid"}} onClick={()=>{this.state.addcolor("red")}} ></div>
            <div style={{width:"50px",height:"50px",background: "blue",border:"2px solid"}} onClick={()=>{this.state.addcolor("blue")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "aqua",border:"2px solid"}} onClick={()=>{this.state.addcolor("aqua")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "goldenrod",border:"2px solid"}} onClick={()=>{this.state.addcolor("goldenrod")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "green",border:"2px solid"}} onClick={()=>{this.state.addcolor("green")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "peru",border:"2px solid"}} onClick={()=>{this.state.addcolor("peru")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "aquamarine",border:"2px solid"}} onClick={()=>{this.state.addcolor("aquamarine")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "aliceblue",border:"2px solid"}} onClick={()=>{this.state.addcolor("aliceblue")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "darkgreen",border:"2px solid"}} onClick={()=>{this.state.addcolor("darkgreen")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "olive",border:"2px solid"}} onClick={()=>{this.state.addcolor("olive")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "crimson",border:"2px solid"}} onClick={()=>{this.state.addcolor("crimson")}}  ></div>
            <div style={{width:"50px",height:"50px",background: "greenyellow",border:"2px solid"}} onClick={()=>{this.state.addcolor("greenyellow")}}  ></div>

        </div>
            <Show color={this.state.color}/>
            </>
        )
    }
}

export default Click;