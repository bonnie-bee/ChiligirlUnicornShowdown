import React, { Component } from "react";
import "./Chilicorn.css";

class Chilicorn extends Component {
 

    componentDidMount() {
        let that = this;
        setTimeout(function(){that.props.updateResult("chilicorn")}, 7000)
        this.props.chilicorn()
    };

    render() {

        return (
            <div id="cornBGDiv">
                <h1 id="cornHeader" className="resultHeader">I'M A CHILICORN</h1>
            </div>
        )
    }
}

export default Chilicorn;