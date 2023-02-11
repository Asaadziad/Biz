const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({ message: "Fill all required fields" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    const salt = bcrypt.genSalt(process.env.SALT_KEY);
    const hashedPass = bcrypt.hash(password, salt);

    const newUser = await User.create({
      name: username,
      email: email,
      password: hashedPass,
    });

    if (newUser) {
      const token = generateToken(newUser._id);
      return res.status(200).json({
        message: "User has been registered successfully",
        token: token,
      });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ message: "User already exists" });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findById(req.user.id);
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }
  const token = generateToken(user._id);
  return res
    .status(200)
    .json({ message: "Logged in successfully", token: token });
};

//helper functions
const generateToken = (id) => {
  return jwt.sign(id, process.env.SECRET_TOKEN);
};
module.exports = { registerUser, loginUser };
