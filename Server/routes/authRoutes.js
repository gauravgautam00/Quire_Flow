const express = require("express");

const router = express.Router();
const {
  logInController,
  signUpController,
} = require("../controllers/authController");

router.post("/login", logInController);
router.post("/signup", signUpController);

module.exports = router;
