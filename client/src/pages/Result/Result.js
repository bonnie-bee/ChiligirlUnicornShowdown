import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Result.css";
import Chiligirl from "../../components/Chiligirl";
import Chilicorn from "../../components/Chilicorn";
import Unicorn from "../../components/Unicorn";

class Result extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/result/chilicorn" component={Chilicorn} />
                        <Route exact path="/result/chiligirl" component={Chiligirl} />
                        <Route exact path="/result/unicorn" component={Unicorn} />
                    </Switch>
                </div>
            </Router>
        )
    }
};

export default Result;