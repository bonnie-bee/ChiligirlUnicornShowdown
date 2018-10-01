import React from "react";
import "./Question2.css";

const Question2 = () => (
    <div>
        <p className="question" id="q2Text">Beans in chili?</p>
        <div id="ansSet1">
            <a href='/question/3'><p className="ansQ2" value="-2">Nay</p></a>
            <a href='/question/3'><p className="ansQ2" id="whatever" value="2">Never</p></a>
        </div>
    </div>

);

export default Question2;