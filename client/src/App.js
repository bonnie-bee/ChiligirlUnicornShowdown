import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Chiligirl from "./pages/Chiligirl";
// import Unicorn from "./pages/Unicorn";
// import Chilicorn from "./pages/Chilicorn";
import Result from "./pages/Result";


const App = () => (
  <Router>
    <div>
      <Switch>
        {/* <Route exact path="/chiligirl" component={Chiligirl} />
        <Route exact path="/unicorn" component={Unicorn} />
        <Route exact path="/chilicorn" component={Chilicorn} /> */}
        <Route path="/result" component={Result} />
        <Route path="/" component={Home} />

      </Switch>
    </div>
  </Router>
);

export default App;
