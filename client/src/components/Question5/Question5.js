import React from "react";
import { Link } from "react-router-dom";
import "./Question5.css";
import chiligirl from "./images/chiligirl.jpg";
import unicorn from "./images/unicorn5.jpeg";

const Question5 = (props) => {
    let thing1 = props.data.hello;
    return (
        <div>
            <p className="question" id="q5Text">Who's your best friend?</p>
            <Link to='/'><img className="answer5" value="2" id="corn" src={unicorn} onClick={thing1} alt="A forest with light shining through the trees" /></Link>
            <Link to='/'><img className="answer5" value="-2" id="girl" src={chiligirl} onClick={thing1} alt="A ranch house" /></Link>
        </div>

    )
};

export default Question5;