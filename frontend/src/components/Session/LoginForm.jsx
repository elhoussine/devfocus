import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login-form.css";
import "../../assets/homepage-hero.jpg"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  loginDemo(e) {
    e.preventDefault();
    this.setState({
      username: "Demo_Jobseeker",
      password: "09f84231f90j30irvoiqrvjwh3209",
    });
    this.props
      .login({
        username: "Demo_Jobseeker",
        password: "09f84231f90j30irvoiqrvjwh3209",
      })
      .then(() => this.props.history.push("/"));
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-container">
        <div className="session-background"></div>
        <div className="login-basebg"></div>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <label>Log in to DevFocus</label>
            <input
              className="form-text-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Enter Username"
            />

            <input
              className="form-text-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Enter Password"
            />
            <div className="login-buttons">
              <input className="login-button" type="submit" value="Log in" />
              <button onClick={this.loginDemo} className="demologin-button">
                Demo Log in
              </button>
            </div>
            <span>
              Don't have an account?
              <Link to={`/signup`}> Sign up</Link>
            </span>
            <ul>{this.renderErrors()}</ul>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
