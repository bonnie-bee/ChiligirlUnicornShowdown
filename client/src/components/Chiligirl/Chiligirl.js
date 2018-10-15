import React, { Component } from "react";
import "./Chiligirl.css";
import chili from "../../images/chiliPot.png"

class Chiligirl extends Component {

    componentDidMount() {
        // this.props.timer(); 
        this.props.chiligirl();
        this.props.updateResult("chiligirl");
    }
    render() {

        return (
            <div id="girlBGDiv">
                <img id="chili1" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili2" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili4" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili5" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili6" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili7" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili8" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili9" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili10" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili11" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili12" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili13" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili14" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili15" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili16" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili17" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili18" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili19" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili20" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili21" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili22" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili23" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili24" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili25" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili26" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili27" class="chilipots" src={chili} alt="chilipot" />
                <img id="chili28" class="chilipots" src={chili} alt="chilipot" />
                <h1 id="girlHeader" className="resultHeader">CHILIGIRL</h1>
                

            </div>
        )
    } 
}

export default Chiligirl;