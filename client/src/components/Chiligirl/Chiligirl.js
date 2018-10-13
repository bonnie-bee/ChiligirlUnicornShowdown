import React, { Component } from "react";
import "./Chiligirl.css";

class Chiligirl extends Component{

    render(){
        // this.props.timer(); 
        // this.props.chiligirl();
        this.props.updateResult("chiligirl")        
        return(
            <div id="girlBGDiv">
            <h1 id="girlHeader"className="resultHeader">I'M A CHILIGIRL</h1>
            </div>
        )
    }
} 

export default Chiligirl;