import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup-form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }


  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

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
      <div className="signup-form-container">
        <div className="session-background"></div>
        <div className="signup-basebg"></div>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <label>Create your free account</label>
            <div className="signup-subheading">Organize your job search!</div>
            <input
              className="form-text-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <input
              className="form-text-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <input
              className="form-text-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <input
              className="form-text-input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <input type="submit" value="Sign up" className="signup-button" />
            <span>
              Already have an account?
              <Link to={`/login/`}> Log in</Link>
            </span>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
