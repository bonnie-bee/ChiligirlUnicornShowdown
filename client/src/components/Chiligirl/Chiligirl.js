import React, { Component } from "react";
import "./Chiligirl.css";
import API from "../../utils/API";

class Chiligirl extends Component{

    saveResult = () => {
        API.saveResult({
        type: "chiligirl",
        amount: 1,
        date: Date.now() 
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    render(){
       
        this.props.timer();
        this.props.chiligirl();
        this.saveResult();
        return(
            <h1 className="resultHeader">I'M A CHILIGIRL</h1>
        )
    }
} 

export default Chiligirl;