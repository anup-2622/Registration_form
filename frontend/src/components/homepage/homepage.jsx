import React from "react";
import "./home.scss";
const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      <h1>hello homepage </h1>
      <button className="btn" onClick={() => setLoginUser({})}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;
