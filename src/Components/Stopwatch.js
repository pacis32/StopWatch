import React, { Component } from "react";

export default class Stopwatch extends Component {
  
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
  
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
   
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };
    render() {
        
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
       
        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">Stopwatch</div>
               
                     {minutes} : {seconds} : {centiseconds}
                    <br/><br/>

                    <button onClick={this.startTimer}>Start</button>
                    {this.state.timerOn === false && this.state.timerTime === 0} 
                        
                    

                    <button  onClick={this.stopTimer}  >Pause</button>
                    {this.state.timerOn === true}
                        
                    
                    <button onClick={this.resetTimer}>Reset</button>
                    {this.state.timerOn === false && this.state.timerTime > 0 }
                  
                    
                </div>
            
        );
    }
}
