import React from "react";
import "./Question1.css";
import ranch from "./images/ranchHouse1.jpg";
import forest from "./images/forest1b.jpg";
import barn from "./images/barn1c.jpg";
import wagon from "./images/chuck3.jpeg";

const Question1 = () => (
    <div>
        <p className="question">Where would you rather live?</p>
        <div id="ansSet1">
            <a href='/question/2'><img className="answer1" value="-1" id="ans1" src={barn} alt="A ranch house" /></a>
            <a href='/question/2'><img className="answer1" value="2" id="ans2" src={forest} alt="A forest with light shining through the trees" /></a>
        </div>
        <div id="ansSet2">
            <a href='/question/2'><img className="answer1" value="1" id="ans3" src={wagon} alt="A covered wagon" /></a>
            <a href='/question/2'><img className="answer1" value="-2" id="ans4" src={ranch} alt="A barn" /></a>
        </div>
    </div>

);

export default Question1;