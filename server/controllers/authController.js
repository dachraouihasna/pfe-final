const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;
  // check if email exists in DB or no
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ msg: "User doesn't exist " });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "bad credentials " });
    }
    // generate a token
    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({ msg: "Login successful", token: token });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    // email has to be unique : bcrypt (hash)
    // findOne() returns first document that matches the query criteria or null if no document matches
    // send back a reponse : status 400 (bad request), msg (use already exists)
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // password has to be hashed
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user : create
    const newUser = new User({ ...req.body, password: hashedPassword });
    // save user to DB
    // send back a response :status 201(created), msg (user created)
    // if user is not created : status 500 (server error), msg (sth went wrong)
    await newUser.save();
    res.status(201).json({ msg: "User created" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { login, register };
