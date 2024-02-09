const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const viewMyQueryController = require("../controllers/viewMyQueryController");
const viewAdministrativeMatterController = require("../controllers/viewAdministrativeMatterController");

router.get("/myQueries", auth, viewMyQueryController);
router.get("/administrativeMatter", auth, viewAdministrativeMatterController);

module.exports = router;
