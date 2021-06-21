import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;

