import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo-raleway-h48.png"

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
    if (this.props.loggedIn) {
      return (
        <div className="navlinks">
          <NavLink
            to={`/jobs`}
            className="navlinks-link"
            activeClassName="navlink_activated"
          >
            Jobs
          </NavLink>
          <NavLink
            to={`/contacts`}
            className="navlinks-link"
            activeClassName="navlink_activated"
          >
            Contacts
          </NavLink>
          <NavLink
            to={`/algos`}
            className="navlinks-link"
            activeClassName="navlink_activated"
          >
            Algos
          </NavLink>
        </div>
      );
    } else {
            return  null;
    }
    
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-content">
          <Link to={`/`}><img src={logo} height="25px"></img></Link>
          {this.navLinks()}
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
