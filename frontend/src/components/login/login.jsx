import React, { useState } from "react";

import "./login.scss";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="loginpage">
      {console.log("user", user)}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handlechange}
        placeholder="Enter your email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handlechange}
        placeholder="Enter your password"
      />

      <div className="button">Login</div>
      <div>or </div>
      <div className="button">Register </div>
    </div>
  );
};

export default Login;
