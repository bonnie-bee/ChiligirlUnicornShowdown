import React, { Component } from "react";
import "./Home.css";
import StartScreen from "../../components/StartScreen"

class Home extends Component {
    render() {
        return (
            <div>
                <div class="BGBox">
                    <StartScreen />
                </div>
            </div>
        )
    }

};

export default Home;
