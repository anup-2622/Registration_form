import React, { useState } from "react";
import axios from "axios";
import "./register.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, repassword } = user;
    if (name && email && password && password === repassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="register">
      {/* {console.log("user", user)} */}
      <h1>Register </h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your name "
        onChange={handlechange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handlechange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="your password "
        onChange={handlechange}
      />
      <input
        type="password"
        name="repassword"
        value={user.repassword}
        placeholder="Re-enter password "
        onChange={handlechange}
      />
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or </div>
      <div className="button" onClick={() => history.push("/login")}>
        Login{" "}
      </div>
    </div>
  );
};

export default Register;
