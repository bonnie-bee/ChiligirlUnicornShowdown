import React, { Component } from "react";
import "./Chilicorn.css";
import API from "../../utils/API";

class Chilicorn extends Component {

    saveResult = () => {
        API.saveResult({
            type: "chilicorn",
            amount: 1,
            date: Date.now()
        })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    render() {
        // this.props.timer()
        this.props.chiligirl()
        this.props.unicorn()
        this.saveResult();
        return (
            <div id = "cornBGDiv">
            <h1 id="cornHeader" className="resultHeader">I'M A CHILICORN</h1>
            </div>
        )
    }
}

export default Chilicorn;