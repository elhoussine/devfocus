import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./Nav/navbar_container";

import Homepage from "./Homepage/Homepage.jsx";
import LoginFormContainer from "./Session/login_form_container";
import SignupFormContainer from "./Session/signup_form_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={Homepage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;