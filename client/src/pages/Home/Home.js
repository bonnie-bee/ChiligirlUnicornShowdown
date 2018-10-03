import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import StartScreen from "../../components/StartScreen";
import Question1 from "../../components/Question1";
import Question2 from "../../components/Question2";
import Question3 from "../../components/Question3";
import Question4 from "../../components/Question4";
import Question5 from "../../components/Question5";
import NoMatch from "../../components/NoMatch";



class Home extends Component {

    state = {
        total: 0,
        result: ""
    };

    answerPicked = (e) => {
        var amounts = parseInt(e.target.getAttribute("value"), 10);
        console.log(amounts);
        let frogs = this.state.total;
        let newTotal = amounts + frogs;
        this.setState({ total: newTotal });
        console.log(frogs);
    }

    finalTotal = (e) => {
        var amounts = parseInt(e.target.getAttribute("value"), 10);
        let frogs = this.state.total;
        let newTotal = amounts + frogs;
        let resultw = "";
        if (newTotal > 0) {
            resultw = "chiligirl";
            this.setState({ total: newTotal, result: resultw });
        }
        if (newTotal < 0) {
            resultw = "unicorn";
            this.setState({ total: newTotal, result: resultw });
        }
        if (newTotal === 0) {
            resultw = "chilicorn";
            this.setState({ total: newTotal, result: resultw });
        }
    }


    render() {
        return (
            <Router>
                <div>
                    <h1>Hey</h1>
                    <div className="BGBox">
                        <Switch>
                            <Route exact path="/" component={StartScreen} />
                            <Route exact path="/question/1" render={(props) => (
                                <Question1 {...props} data={{ color: "red", hello: this.answerPicked }} />
                            )} />
                            <Route exact path="/question/2" render={(props) => (
                                <Question2 {...props} data={{ hello: this.answerPicked }} />
                            )} />
                            <Route exact path="/question/3" render={(props) => (
                                <Question3 {...props} data={{ hello: this.answerPicked }} />
                            )} />
                            <Route exact path="/question/4" render={(props) => (
                                <Question4 {...props} data={{ hello: this.answerPicked }} />
                            )} />
                            <Route exact path="/question/5" render={(props) => (
                                <Question5 {...props} data={{ hello: this.finalTotal }} />
                            )} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }

};

export default Home;
