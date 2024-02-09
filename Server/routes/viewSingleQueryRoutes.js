const express = require("express");
const router = express.Router();
const viewSingleQueryController = require("../controllers/viewSingleQueryController");
const auth = require("../middlewares/auth");
router.get("/:queryId", auth, viewSingleQueryController);
module.exports = router;
