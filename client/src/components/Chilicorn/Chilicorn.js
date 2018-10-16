import React, { Component } from "react";
import "./Chilicorn.css";
import hornLeft from "../../images/hornleft.png";
import hornRight from "../../images/hornright.png";

class Chilicorn extends Component {


    componentDidMount() {
        let that = this;
        setTimeout(function () { that.props.updateResult("chilicorn") }, 6000)
        this.props.chilicorn()
        this.props.timer()
    };

    render() {

        return (
            <div id="cornBG">
                <div id="cornBGDiv">
                    <h6 id="elusive">The Elusive</h6>
                    <h1 id="cornHeader" className="resultHeader">CHILICORN</h1>
                    <img id="hornLeft" src={hornLeft} />
                    <img id="hornRight" src={hornRight} />
                </div>
            </div>
        )
    }
}

export default Chilicorn; 