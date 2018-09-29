import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Question";
import NoMatch from "./pages/Result";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/question/:id" component={Question} />
        <Route exact path="/result/:id" component={Result} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
