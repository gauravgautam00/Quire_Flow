const express = require("express");
const setMarkAsController = require("../controllers/setMarkAsController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, setMarkAsController);
module.exports = router;
