import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";


import Homepage from "./Homepage/Homepage.jsx";
import LoginFormContainer from "./Session/login_form_container";
import SignupFormContainer from "./Session/signup_form_container";
import NavBarContainer from "./Nav/navbar_container"
import AlgosIndexContainer from "./Algorithms/algos_index_container";

const App = () => (
  <div>
    <NavBarContainer/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/algos" component={AlgosIndexContainer}/>
    </Switch>
  </div>
);

export default App;