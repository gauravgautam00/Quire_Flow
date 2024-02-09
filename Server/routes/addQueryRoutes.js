const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const addQueryController = require("../controllers/addQueryController");

router.post("/", auth, addQueryController);
module.exports = router;
