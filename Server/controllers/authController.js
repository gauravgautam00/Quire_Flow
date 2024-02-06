const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const shortId = require("shortid");

const signUpController = async (req, res) => {
  const { name, email, password } = req.body;
  let { organisation, department } = req.body;
  const anonyKey = shortId.generate();
  const userPresent = await User.findOne({
    email: email,
  });

  if (userPresent) {
    return res.status(400).send("User already exist . Please login");
  }
  if (!organisation) {
    organisation = "not specified";
  }

  if (!department) {
    department = "not specified";
  }
  const hashedPassword = await bcrypt.hash(password, 2);
  const curUser = await User.create({
    name,
    email,
    password: hashedPassword,
    organisation,
    department,
    anonyKey,
  });
  const token = jwt.sign(
    {
      anonyKey: anonyKey,
    },
    process.env.SECRET_KEY
  );

  res.status(200).json({
    message: "user registered successfully",
    userToken: token,
    User: curUser,
  });
};

const logInController = async (req, res) => {
  const { email, password } = req.body;
  const curUser = await User.findOne({ email });

  if (curUser) {
    console.log(curUser);

    const check = await bcrypt.compare(password, curUser.password);
    console.log("bcrypt reply", check);
    if (!check) {
      return res.status(401).send("Unauthorized user wrong password");
    }

    const token = jwt.sign(
      {
        anonyKey: curUser.anonyKey,
      },
      process.env.SECRET_KEY
    );

    res.status(200).json({
      message: "user login successfully",
      userToken: token,
      User: curUser,
    });
  } else {
    return res.status(404).send("User not found , Kindly sign up first");
  }
};

module.exports = { logInController, signUpController };
