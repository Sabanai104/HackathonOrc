import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;

