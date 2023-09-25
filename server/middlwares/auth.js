const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  const token = req.headers["authorization"]
    ? req.headers["authorization0"]
    : null;

  if (!token) {
    return res.status(401).json({ msg: "You are not authorized" });
  }
  const verified = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Token verification failed" });
    }
    return decoded;
  });
  if (!verified) {
    return res.status(401).json({ msg: "Token verification failed" });
  }
  const user = await userSchema.findById(verified.id);
  if (!user) {
    return res.status(401).json({ msg: "User doesn't exist" });
  }
  req.user = user;
  next();
};

module.exports = isAuth;