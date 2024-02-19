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

  // console.log("Got the sign up request", req.body);

  if (userPresent) {
    return res
      .status(400)
      .json({ message: "User already exist . Please login" });
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
      organisation,
      department,
      objectId: curUser._id,
    },
    process.env.SECRET_KEY
  );

  return res.status(200).json({
    message: "user registered successfully",
    userToken: token,
    User: curUser,
    anonyKey: anonyKey,
  });
};

const logInController = async (req, res) => {
  // console.log("login request");
  const { email, password } = req.body;
  const curUser = await User.findOne({ email });

  if (curUser) {
    // console.log(curUser);

    const check = await bcrypt.compare(password, curUser.password);
    if (!check) {
      return res
        .status(401)
        .json({ message: "Unauthorized user wrong password" });
    }

    const token = jwt.sign(
      {
        anonyKey: curUser.anonyKey,
        organisation: curUser.organisation,
        department: curUser.department,
        objectId: curUser._id,
      },
      process.env.SECRET_KEY
    );
    const curUserDetails = {
      message: "user login successfully",
      userToken: token,
      User: curUser,
      anonyKey: curUser.anonyKey,
    };
    // console.log(curUserDetails);
    return res.status(200).json(curUserDetails);
  } else {
    return res
      .status(404)
      .json({ message: "User not found , Kindly sign up first" });
  }
};

module.exports = { logInController, signUpController };
