import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Chiligirl from "./pages/Chiligirl";
// import Unicorn from "./pages/Unicorn";
// import Chilicorn from "./pages/Chilicorn"


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route exact path="/chiligirl" component={Chiligirl} />
        <Route exact path="/unicorn" component={Unicorn} />
        <Route exact path="/chilicorn" component={Chilicorn} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
