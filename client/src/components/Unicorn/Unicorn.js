import React, { Component } from "react";
import API from "../../utils/API";
import "./Unicorn.css";

class Unicorn extends Component {

    saveResult = () => {
        API.saveResult({
        type: "unicorn",
        amount: 1,
        date: Date.now() 
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }


    render(){
        this.props.timer();
        this.props.unicorn();
        this.saveResult();

        return (
            <h1 className="resultHeader">I'M A UNICORN</h1>

        )
    }
}

export default Unicorn;