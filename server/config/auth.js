const jwt = require("jsonwebtoken");
const env = require("dotenv").load();

const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.cookies.token;
   
  console.log("Am here");
  if (token) {
      console.log(token);
    jwt.verify(token, process.env.SECRET_TOKEN_STRING, function(err, decoded) {
      if (err) {
        return res.status(401).json({ error: "Unauthorized:Invalid token" });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  } else {
    res.status(401).json({ Error: "Unauthorized:No token provided" });
    // next();
  }
};

module.exports = withAuth;
