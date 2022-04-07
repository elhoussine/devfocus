import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./NavBar";

const mapStateToProps = (state) => {
  let loggedIn = state.session.isAuthenticated;

  if (loggedIn) {
    let username = state.session.user.username;
    return {
      loggedIn: loggedIn,
      username: username,
    };
  } else {
    return {
      loggedIn: state.session.isAuthenticated,
    };
  }
};

export default connect(mapStateToProps, { logout })(NavBar);
