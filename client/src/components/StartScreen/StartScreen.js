import React from "react";
import "./StartScreen.css";

const StartScreen = () => (
    <div>
    <div className="startBox">
        <h1 className="startText">ARE YOU A</h1>
        <h1 className="startText">CHILIGIRL OR A UNICORN</h1>
    </div>
    <a id="startBtn" href='/question/1'>START</a>
    </div>
);

export default StartScreen;