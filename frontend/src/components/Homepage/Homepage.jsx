import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>job search tool MERN</h1>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
        <footer>This is the app homepage.</footer>
      </div>
    );
  }
}

export default Homepage;
