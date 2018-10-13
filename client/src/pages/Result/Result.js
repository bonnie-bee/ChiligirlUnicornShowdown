import React, { Component } from "react";
import "./Result.css";
import API from "../../utils/API";

class Result extends Component {
    // loadResults = () => {
    //     API.getResults()
    //     .then(res => console.log(res))
    //     .catch(err=>console.log(err))
    // }
    render() {
    console.log(this.props);
    this.props.results();
    

        return (
            <h1>HERE ARE THE RESULTS FOR TODAY</h1>
        )
    }
};

export default Result;