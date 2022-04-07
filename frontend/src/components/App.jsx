import React from "react";
import "../App.css"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import JobsIndexContainer from "../components/Jobs/jobs_index_container"

import Homepage from "./Homepage/Homepage.jsx";
import LoginFormContainer from "./Session/login_form_container";
import SignupFormContainer from "./Session/signup_form_container";
import NavBarContainer from "./Nav/navbar_container"
import AlgosIndexContainer from "./Algorithms/algos_index_container";
import HomepageContainer from "./Homepage/homepage_container";
import Footer from "./Footer/Footer"
import Modal from "./modal/modal"
import ContactsIndexContainer from "./Contacts/contacts_index_container"

const App = () => (
  <div className="app">
    <Modal />
    <NavBarContainer />

    <div className="content">
        <ProtectedRoute exact path="/jobs" component={JobsIndexContainer} />
        <ProtectedRoute
          exact
          path="/contacts"
          component={ContactsIndexContainer}
        />
        <ProtectedRoute exact path="/algos" component={AlgosIndexContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={HomepageContainer} />
    </div>

  <Switch>
    <Route exact path ="/login"/>
    <Route exact path ="/signup"/>
    <Footer />
  </Switch>
  </div>
);

export default App;