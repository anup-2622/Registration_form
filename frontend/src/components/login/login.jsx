import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./login.scss";
const Login = ({ setLoginUser }) => {
  const history = useHistory();

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
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <div className="loginpage">
      {/* {console.log(user)} */}
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

      <div className="button" onClick={login}>
        Login
      </div>
      <div>or </div>
      <div className="button" onClick={() => history.push("/register")}>
        Register{" "}
      </div>
    </div>
  );
};

export default Login;
