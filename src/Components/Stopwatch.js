import React, { Component } from "react";
// import "./App.css";
class Stopwatch extends Component {
    /**
       * state
       */
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    /**
     * Starting the Stopwatch timer
     */
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
    /**
     * Stop and Reset
     */
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
        /**
         * Formatting and Display
         */
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100))
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">Stopwatch</div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                    <br/>
                    {this.state.timerOn === false && this.state.timerTime === 0} 
                        <button onClick={this.startTimer}>Start</button>
                    

                    <button  onClick={this.stopTimer}  >Pause</button>
                    {this.state.timerOn === true}
                        
                    
                    <button onClick={this.resetTimer}>Reset</button>
                    {this.state.timerOn === false && this.state.timerTime > 0 }
                  
                    
                </div>
            </div>
        );
    }
}
export default Stopwatch;