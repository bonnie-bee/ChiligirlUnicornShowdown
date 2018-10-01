import React from "react";
import "./Question5.css";
import chiligirl from "./images/chiligirl.jpg";
import unicorn from "./images/unicorn5.jpeg";

const Question5 = () => (
    <div>
    <p className="question" id="q5Text">Who's your best friend?</p>
        <a href='/'><img className="answer5" value="2" id="corn" src={unicorn} alt="A forest with light shining through the trees" /></a>
        <a href='/'><img className="answer5" value="-2" id="girl" src={chiligirl} alt="A ranch house" /></a>
    </div>

);

export default Question5;