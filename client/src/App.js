import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import Chiligirl from "./pages/Chiligirl";
// import Unicorn from "./pages/Unicorn";
import Chilicorn from "./components/Chilicorn";
import Chiligirl from "./components/Chiligirl";
import Unicorn from "./components/Unicorn";
// import Result from "./pages/Result";
import StartScreen from "./components/StartScreen";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import NoMatch from "./components/NoMatch";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      result: ""
    }

    this.editState = this.editState.bind(this);
    this.finalResult = this.finalResult.bind(this)
  };


  editState(e) {
    let stateTotal = this.state.total;
    let amounts = parseInt(e.target.getAttribute("value"), 10);
    let newTotal = amounts + stateTotal;
    this.setState({ total: newTotal});
    return newTotal;
  }

  finalResult(e){
    let newTotal=this.editState(e);
    console.log("new total: " + newTotal)
    let resultw = "";
    if (newTotal > 0) {
      resultw = "Chiligirl";
      this.setState({ total: newTotal, result: resultw });
      console.log(this.state)
      let hostName = window.location.hostname;
      console.log(hostName)

      window.location.assign("/result/Chilicorn")
    }
    if (newTotal < 0) {
      resultw = "Unicorn";
      this.setState({ total: newTotal, result: resultw });
      console.log(this.state)
      let hostName = window.location.hostname;
      console.log(hostName)

      window.location.assign("/result/Chilicorn")
    }
    if (newTotal === 0) {
      resultw = "Chilicorn";
      this.setState({ total: newTotal, result: resultw });
      console.log(this.state)
      let hostName = window.location.hostname;
      window.location.assign("/result/Chilicorn")
      console.log(hostName)


    }
  }


// resultRoute(){
//   let result = this.state.result;
//   if (result==="chiligirl") return "/Chiligirl"
//   if (result === "unicorn") return "/Unicorn"
//   if (result === "chilicorn") return "/Chilicorn"
// }

  render() {
    console.log("result: " + this.state.total + ", " + this.state.result)
    return (
      <Router>
        {/* <Switch> */}
        {/* <div className="BGBox"> */}
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/question/1" render={(props) => (
            <Question1 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/2" render={(props) => (
            <Question2 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/3" render={(props) => (
            <Question3 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/4" render={(props) => (
            <Question4 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/5" render={(props) => (
            <Question5 {...props} finalValue={this.finalResult} />
          )} />
          <Route exact path="/result/chiligirl" component={Chiligirl} />
          <Route exact path="/result/unicorn" component={Unicorn} />
          <Route exact path="/result/chilicorn" component={Chilicorn} />
          <Route component={NoMatch} />

        </Switch>
        {/* </div> */}
        {/* </Switch> */}
      </Router>
    )
  }
};

export default App;
