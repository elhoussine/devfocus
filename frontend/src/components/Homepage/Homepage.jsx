import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/homepage-hero.jpg";
import "./homepage.css";
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.loginDemo = this.loginDemo.bind(this);
  }

  loginDemo(e) {
    this.props
      .login({
        username: "Demo_Jobseeker",
        password: "09f84231f90j30irvoiqrvjwh3209",
      })
      .then(() => this.props.history.push("/jobs"));
  }

  render() {
    const heroSignupDisplay = this.props.loggedIn ? (
      <div className="hero-buttons">
        <Link to={`/jobs`}>
          <button className="hero-signup">Enter App</button>
        </Link>
      </div>
    ) : (
      <div className="hero-buttons">
        <Link to={`/signup`}>
          <button className="hero-signup">Sign up</button>
        </Link>
        <button className="hero-demo" onClick={this.loginDemo}>
          or view a demo
        </button>
      </div>
    );

    const homepageLoginDisplay = this.props.loggedIn ? (
      <Link to={`/jobs`}>
        <button className="bottom-login">Enter App</button>
      </Link>
    ) : (
      <Link to={`/login`}>
        <button className="bottom-login">Log in</button>
      </Link>
    );

    return (
      <div className="homepage">
        <div className="hero-container">
          <div className="hero-card-container">
            <div className="hero-card-content">
              <h1>
                Organize your<br></br>job search
              </h1>
              <h2>
                Track your job applications, networking, data structures &
                algorithms, all in one place
              </h2>
              {heroSignupDisplay}
            </div>
          </div>
          <img className="hero" src={hero}></img>
        </div>
        <div className="bottom-container">
          <div className="bottom-heading">
            <div className="bottom-title">
              Engineering Job Search, Refactored
            </div>
            <div className="bottom-subheading">
              DevFocus is an organizational tool built for developers to quickly
              land their dream roles.
            </div>
          </div>
          <div className="bottom-cards">
            <div className="bottom-card__left">
              <h1>Job Applications</h1>
              <p>
                Track all job applications that you've applied to, or plan to apply to.
              </p>
            </div>
            <div className="bottom-card__center">
              <h1>Networking</h1>
              <p>
                Keep track of the tech professionals that you've reached out to. Grow your network.
              </p>
            </div>
            <div className="bottom-card__right">
              <h1>Data Structures & Algorithms</h1>
              <p>
                Track your daily algos practice - check off completed problems. 2 featured a day.
              </p>
            </div>
          </div>
        </div>
        <div className="built-for-container">
          Built for Software Developers
          {homepageLoginDisplay}
        </div>
      </div>
    );
  }
}

export default Homepage;
