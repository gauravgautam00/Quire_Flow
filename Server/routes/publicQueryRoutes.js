const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const viewAllPublicController = require("../controllers/viewAllPublicController");
const viewOrganisationPublicController = require("../controllers/viewOrganisationPublicController");

router.get("/myOrganisation", auth, viewOrganisationPublicController);
router.get("/all", auth, viewAllPublicController);
module.exports = router;
