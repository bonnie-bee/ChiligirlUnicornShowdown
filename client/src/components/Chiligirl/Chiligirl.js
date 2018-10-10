import React, { Component } from "react";
import "./Chiligirl.css";
// const five = require('johnny-five');
// const board = new five.Board({ port: "COM5" });

class Chiligirl extends Component{

    

    // constructor(props) {
        // super(props);
        // chiligirl();
    //   }

    render(){
       
        this.props.timer();
        this.props.chiligirl();
        return(
            <h1 className="resultHeader">I'M A CHILIGIRL</h1>
        )
    }
} 

export default Chiligirl;