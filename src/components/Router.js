import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/*match.params.id*/}
        <Route exact path="/detail/:id" component={Detail} />
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRouter;
