import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./Result.css";
import Chiligirl from "../../components/Chiligirl";
import Chilicorn from "../../components/Chilicorn";
import Unicorn from "../../components/Unicorn";

class Result extends Component {
    render() {
    console.log(this.props)

    

        return (
            <Router>
                <div>
                    <Route path="/result" component={Chilicorn}></Route>
                    {/* <Switch> */}
                        {/* <Route exact path="/result/chilicorn" component={Chilicorn} /> */}
                        {/* <Route exact path="/result/chiligirl" component={Chiligirl} /> */}
                        {/* <Route exact path="/result/unicorn" component={Unicorn} /> */}
                    {/* </Switch> */}
                </div>
            </Router>
        )
    }
};

export default Result;