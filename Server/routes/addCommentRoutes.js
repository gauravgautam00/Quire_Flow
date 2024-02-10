const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const addCommentController = require("../controllers/addCommentController");

router.post("/", auth, addCommentController);
module.exports = router;
