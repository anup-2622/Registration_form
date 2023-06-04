// import express from "express";
// import cors from "cors";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/registerationDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);
// user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Model
const User = new mongoose.model("User", userSchema);
// Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login successful", user: user });
      } else {
        res.send({ message: "Password did not match " });
      }
    } else {
      res.send({ message: "User not register " });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({
        // name: name, // the name is actually a schema and another one is value
        // we can also write like this if name = name , email = email
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "successfully Register" });
        }
      });
    }
  });
});
app.listen(9002, () => {
  console.log("server is running at port 9002");
});
