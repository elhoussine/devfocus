import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/homepage-hero.jpg";
import "./homepage.css";
class Homepage extends React.Component {
  constructor(props){
    super(props)
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
    return (
      <div className="homepage">
        <div className="hero-container">
          {/* <div className="hero-basebg"></div> */}
          <div className="hero-card-container">
            {/* <div className="hero-card-basebg"></div> */}
            <div className="hero-card-content">
              <h1>
                Accelerate your<br></br>job search
              </h1>
              <h2>
                Track your job applications, networking, data structures & algorithms, all in one place
              </h2>
              <div className="hero-buttons">
                <Link to={`/signup`}>
                  <button className="hero-signup">Sign up</button>
                </Link>
                <button className="hero-demo" onClick={this.loginDemo}>or view a demo</button>
              </div>
            </div>
          </div>
          <img className="hero" src={hero}></img>
        </div>
        <div className="bottom-container">
          <div className="bottom-heading">
            <div className="bottom-title">Engineering Job Search, Refactored</div>
            <div className="bottom-subheading">
              DevFocus is an organizational tool built for developers to quickly land their dream roles.
            </div>
          </div>
          <div className="bottom-cards">
            <div className="bottom-card__left">
              <h1>Job Applications</h1>
              <p>
                Track all jobs you've applied to, and save the jobs you're
                interested in and plan to apply to.
              </p>
            </div>
            <div className="bottom-card__center">
              <h1>Networking</h1>
              <p>
                Track a list of software engineers you've reached out to for
                informational interviews. See your contacts grow over time.
              </p>
            </div>
            <div className="bottom-card__right">
              <h1>Data Structures & Algorithms</h1>
              <p>
                Track your daily algos practice - check off all the problems
                you've completed. 2 featured problems a day.
              </p>
            </div>
          </div>
        </div>
        <div className="built-for-container">
          Built for Software Developers
          <Link to={`/login`}>
            <button className="bottom-login">Log in</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
