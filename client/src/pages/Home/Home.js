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
    render() {
        return (
            <Router>
                <div>
                    <div className="BGBox">
                        <Switch>
                            <Route exact path="/" component={StartScreen} />
                             <Route exact path="/question/1" component={Question1} />
                            <Route exact path="/question/2" component={Question2} />
                            <Route exact path="/question/3" component={Question3} />
                            <Route exact path="/question/4" component={Question4} />
                            <Route exact path="/question/5" component={Question5} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }

};

export default Home;
