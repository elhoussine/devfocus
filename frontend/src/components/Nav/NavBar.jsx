import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-buttons">
          <h1>Welcome _username_</h1>
          <button className="navbar-logout" onClick={this.logoutUser}>Logout</button>
          {/* <Link to={"/algos"}>algos</Link> */}
        </div>
      );
    } else {
      return (
        <div className="navbar-buttons">
          <Link to={"/login"}>
            <button className="navbar-login">Log in</button>
          </Link>
          <Link to={"/signup"}>
            <button className="navbar-signup">Sign up</button>
          </Link>
        </div>
      );
    }
  }

  navLinks(){
    return (
      <div className="navlinks">
        <Link to={`/jobs`}>
          <button className="navlinks-jobs">Jobs</button>
        </Link>
        <Link to={`/contacts`}>
          <button className="navlinks-contacts">Contacts</button>
        </Link>
        <Link to={`/algos`}>
          <button className="navlinks-algos">Algos</button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-content">
        logo here
        {this.navLinks()}
        {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
