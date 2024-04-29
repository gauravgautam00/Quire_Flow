const User = require("../models/userModel");

const profileController = async (req, res) => {
  const { anonyKey } = req.query;

  if (!anonyKey) {
    res.status(400).json({ message: "Bad request  , no anonyKey found" });
  }

  const user = await User.find({ anonyKey });
  res.status(200).json({ user });
};

module.exports = profileController;
