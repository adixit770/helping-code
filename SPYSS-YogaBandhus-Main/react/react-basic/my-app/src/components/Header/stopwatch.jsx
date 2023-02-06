import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      min:0,
      hour:0,
      value: "",
      start:false,
      startTimer: () => {
        if(!this.state.start){
        let s = setInterval(() => {

          this.setState({ clicks: this.state.clicks + 1 });
          
        if (this.state.clicks>=59) {
            this.setState({clicks:0});
             this.setState({ min: this.state.min + 1 });
        }
        else if(this.state.min>=59) {
            this.setState({min:0});
             this.setState({ hour: this.state.hour + 1 });
        }

        
        
        }, 1);
        this.setState({ value: s ,start:true});


       
       
      }
    },
      myStop: () => {
        clearInterval(this.state.value);
        this.setState({start:false});

      },
      myreset: () => {
        
        this.setState({clicks:this.state.clicks*0});
        this.setState({min:this.state.min*0});
        this.setState({hour:this.state.hour*0});
        clearInterval(this.state.value);
        this.setState({start:false});
         
      }
    };
  }
  render() {
    return (
      <div>
        <h1>sec:{this.state.clicks}</h1>
        <h1>min:{this.state.min}</h1>
        <h1>hour:{this.state.hour}</h1>
        {/* eslint-disable-next-line */}
        <button type="submit" onClick={this.state.startTimer}>
          Start
        </button>
        <button type="submit" onClick={this.state.myStop}>
          stop
        </button>
        <button type="submit" onClick={this.state.myreset}>
          reset
        </button>
      </div>
    );
  }
}

export default Timer;
