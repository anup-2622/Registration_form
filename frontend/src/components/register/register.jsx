import React, { useState } from "react";
import "./register.scss";

const Register = () => {
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

  return (
    <div className="register">
      {console.log("user", user)}
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
      <div className="button">Register</div>
      <div>or </div>
      <div className="button">Login </div>
    </div>
  );
};

export default Register;
