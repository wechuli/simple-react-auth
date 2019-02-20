const jwt = require("jsonwebtoken");
const env = require("dotenv").load();
const User = require('../models/User.model');


const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.cookies.token;
   
  console.log("Am here");
  if (token) {
      console.log(token);
    jwt.verify(token, process.env.SECRET_TOKEN_STRING, async function(err, decoded) {
      if (err) {
        return res.status(401).json({ message: "Unauthorized:Invalid token" });
      } else {
        const user = await User.find({email:decoded.email});
        req.email = decoded.email;
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized:No token provided" });
    // next();
  }
};

module.exports = withAuth;
