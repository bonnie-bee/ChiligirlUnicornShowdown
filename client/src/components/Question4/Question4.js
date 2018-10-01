import React from "react";
import "./Question4.css";

const Question4 = () => (
    <div>
    <p className="question" id="q4Text">What's your role on the chili team?</p>
        <div id="ansSet4a">
            <a href='/question/5'><p className="ansQ4" value="2" id="q4a1">Cook</p></a>
            <a href='/question/5'><p className="ansQ4 leftSide" value="0" id="q4a2">Taster</p></a>
            <a href='/question/5'><p className="ansQ4 leftSide" value="-2" id="q4a3">Mascot</p></a>
        </div>
        <div id="ansSet4b">
            <a href='/question/5'><p className="ansQ4" value="-1" id="q4a4">Decorator</p></a>
            <a href='/question/5'><p className="ansQ4 leftSide" value="1" id="q4a5">Captain</p></a>
        </div>
    </div>

);

export default Question4;