import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Homepage from "./Homepage";

const mapStateToProps = (state) => {
  let loggedIn = state.session.isAuthenticated;
  return {
    loggedIn: loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
