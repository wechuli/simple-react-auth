const express = require("express");
const User = require("../models/User.model");
const env = require("dotenv").load(); //Use the .env file to load the variables
const jwt = require("jsonwebtoken");
const withAuth = require("../config/auth");

router = express.Router();

router.get("/home", async (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to Home-This is from express server" });
});

router.get("/secret",withAuth, async (req, res) => {
  res.status(200).json({ message: "The password is potato potatoes" });
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });

    await user.save();

    res.status(201).json({ message: "Welcome to the club" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            err
          });
        } else if (!same) {
          res.status(401).json({ error: "Incorrect email or password" });
        } else {
          //Issue token
          const payload = { email };
          const token = jwt.sign(payload, process.env.SECRET_TOKEN_STRING, {
            expiresIn: "1h"
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    } else {
      res.status(401).json({ error: "Incorect user or password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
