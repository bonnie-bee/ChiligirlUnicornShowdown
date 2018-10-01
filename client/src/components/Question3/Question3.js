import React from "react";
import "./Question3.css";
import chili1 from "./images/chili1.jpg";
import chili2 from "./images/chili5.JPG";
import chili3 from "./images/chili6.jpeg";

const Question3 = () => (
    <div>
        <p className="question" id="q3Text">Which chili do you want?</p>
        <a href='/question/4'><img className="answer3" value="0" id="chili1" src={chili1} alt="A ranch house" /></a>
        <a href='/question/4'><img className="answer3" value="-1" id="chili2" src={chili2} alt="A forest with light shining through the trees" /></a>
        <a href='/question/4'><img className="answer3" value="1" id="chili3" src={chili3} alt="A covered wagon" /></a>
    </div>

);

export default Question3;