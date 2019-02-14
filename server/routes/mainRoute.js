const express = require("express");

router = express.Router();

router.get("/home", async (req, res) => {
  res.status(200).json({ message: "Welcome to Home-This is from express server" });
});

router.get("/secret", async (req, res) => {
  res.status(200).json({ message: "The password is potato potatoes" });
});

module.exports = router;
