import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import moment from "moment";
import API from "./utils/API";
import Chilicorn from "./components/Chilicorn";
import Chiligirl from "./components/Chiligirl";
import Unicorn from "./components/Unicorn";
import StartScreen from "./components/StartScreen";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Result from "./pages/Result"
import NoMatch from "./components/NoMatch";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8081');
// import { chiligirl } from './socketApi'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      result: ""
    }

    this.editState = this.editState.bind(this);
    this.finalResult = this.finalResult.bind(this);
  };

  chiligirl(){
    socket.emit('chiligirl', 'chiligirl!');
  };

  unicorn(){
    socket.emit('unicorn', 'unicorn!')
  }

  editState(e) {
    let stateTotal = this.state.total;
    let amounts = parseInt(e.target.getAttribute("value"), 10);
    let newTotal = amounts + stateTotal;
    this.setState({ total: newTotal });
    return newTotal;
  }

  finalResult(e) {
    let newTotal = this.editState(e);
    console.log("new total: " + newTotal)
    let resultw = "";
    if (newTotal > 0) {
      resultw = "Chiligirl";
      this.setState({ total: newTotal, result: resultw });
      window.location.assign("/result/Chiligirl")
    }
    if (newTotal < 0) {
      resultw = "Unicorn";
      this.setState({ total: newTotal, result: resultw });
      window.location.assign("/result/Unicorn")
    }
    if (newTotal === 0) {
      resultw = "Chilicorn";
      this.setState({ total: newTotal, result: resultw });
      window.location.assign("/result/Chilicorn")
    }
  }

  timer() {
    setTimeout(function () {
      window.location.assign("/");
      let total = 0;
    let result = "";
    this.setState({ total: total, result: result})
    }, 7000)
  }

  newResults(result) {
    let today = moment().format("MMM Do YY");
    API.saveResult({
      resultType: result,
      amount: 0,
      date: today 
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  updateResult = (resultType, today) => {
    API.updateResult({
      resultType: resultType, 
      date: today
    })
    .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  // reset(){
  //   let total = 0;
  //   let result = "";
  //   this.setState({ total: total, result: result})
  // }

  render() {
    console.log("result: " + this.state.total + ", " + this.state.result)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => (
            <StartScreen {...props} newResults={this.newResults} />
          )} />
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
          <Route exact path="/result/chiligirl" render={(props) => (
            <Chiligirl {...props} timer={this.timer} chiligirl={this.chiligirl} updateResult={this.updateResult}/>
          )} />
          <Route exact path="/result/unicorn" render={(props) => (
            <Unicorn {...props} timer={this.timer} unicorn={this.unicorn} updateResult={this.updateResult}/>
          )} />
          <Route exact path="/result/chilicorn" render={(props) => (
            <Chilicorn {...props} timer={this.timer} chiligirl={this.chiligirl} unicorn={this.unicorn} updateResult={this.updateResult} />
          )} />
          <Route exact path="/result" render={(props) => (
            <Result {...props} />
          )} />
          <Route component={NoMatch} />

        </Switch>
      </Router>
    )
  }
};

export default App;
