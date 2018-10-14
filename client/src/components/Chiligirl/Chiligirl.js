import React, { Component } from "react";
import "./Chiligirl.css";

class Chiligirl extends Component {

    componentDidMount() {
        this.props.timer(); 
        this.props.chiligirl();
        this.props.updateResult("chiligirl");
        this.props.getResults();
    }
    render() {

        return (
            <div id="girlBGDiv">
                <h1 id="girlHeader" className="resultHeader">I'M A CHILIGIRL</h1>
            </div>
        )
    }
}

export default Chiligirl;