import React, { Component } from "react";
//stopwatch class
class Stopwatch extends Component {
  //state 
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
  // handle the click on the function start
    startTimer = () => {
        this.setState({
            timerOn: false,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        // Update the count down every 1 second
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
   // handle the stop function when the button is clicked
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    // when clicked to reset the timer will reset it to zero
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };
    render() {//The render method will be called each time an update happens
        
  // Time calculations for days, minutes , seconds and centiseconds
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

   // return the results    
        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">Stopwatch</div>
               
                     {minutes} : {seconds} : {centiseconds}
                    <br/><br/>

                    <button onClick={this.startTimer}>Start</button>
                    {this.state.timerOn === false && this.state.timerTime === 0} 
                        
                    

                    <button  onClick={this.stopTimer}  >Pause</button>
                    {this.state.timerOn ? true: false }
                        
                    
                    <button onClick={this.resetTimer}>Reset</button>
                    {this.state.timerOn === false && this.state.timerTime > 0 }
                  
                    
                </div>
            
        );
    }
}
export default  Stopwatch;