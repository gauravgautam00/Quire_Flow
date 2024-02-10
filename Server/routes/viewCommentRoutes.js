const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const viewCommentController = require("../controllers/viewCommentController");

router.get("/:query_id", auth, viewCommentController);
module.exports = router;
