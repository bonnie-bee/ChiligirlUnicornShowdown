import React, { Component } from "react";
import "./Chilicorn.css";

class Chilicorn extends Component {


    render() {
        // this.props.timer()
        // this.props.chiligirl()
        // this.props.unicorn()
        this.props.updateResult("chilicorn")        
        return (
            <div id = "cornBGDiv">
            <h1 id="cornHeader" className="resultHeader">I'M A CHILICORN</h1>
            </div>
        )
    }
}

export default Chilicorn;