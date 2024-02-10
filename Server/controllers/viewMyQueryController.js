const queryRecordModel = require("../models/queryRecordModel");
const User = require("../models/userModel");

const viewMyQueryController = async (req, res) => {
  const senderAnonyKey = req.senderAnonyKey;
  const curUser = await User.findOne({
    anonyKey: senderAnonyKey,
  });
  queryRecordModel
    .find({
      sender: curUser._id,
    })
    .populate("sender")
    .populate("receiver")
    .populate("query")
    .then((populatedQuery) => {
      return res.status(200).json({
        allQuery: populatedQuery,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Some error occurred while fetching all the queries",
        err,
      });
    });
};
module.exports = viewMyQueryController;
