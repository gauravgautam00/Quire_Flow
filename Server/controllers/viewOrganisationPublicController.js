const Query = require("../models/queryModel");

const viewOrganisationPublicController = async (req, res) => {
  try {
    const organisation = req.organisation;
    const requiredQueryData = await Query.find({
      isPublic: true,
      organisation,
    });
    res.status(200).json({
      requiredQueryData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Some error occurred while fetching the public query ",
    });
  }
};
module.exports = viewOrganisationPublicController;
