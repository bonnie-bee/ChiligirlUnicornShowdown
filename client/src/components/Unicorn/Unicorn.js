import React, { Component } from "react";
import moment from "moment";
import "./Unicorn.css";

class Unicorn extends Component {

    


    render(){
        // this.props.timer();
        let today = (moment().format("MMM Do YY"));
        this.props.unicorn();
        this.props.updateResult("unicorn", today)
        return (
            <div id="uniBGDiv">
            <h1 id="uniHeader" className="resultHeader">I'M A <span id="uRes" >U</span><span id="n1Res">N</span><span id="iRes">I</span><span id="cRes">C</span><span id="oRes">O</span><span id="rRes">R</span><span id="n2Res">N</span></h1>
            </div>
        )
    }
}

export default Unicorn;