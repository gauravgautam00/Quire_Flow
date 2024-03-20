const Query = require("../models/queryModel");

const viewSingleQueryController = async (req, res) => {
  // console.log("Entering");
  const queryId = req.params.queryId;
  // console.log(queryId);
  const curQuery = await Query.findOne({ _id: queryId });

  if (curQuery) {
    Query.findOne({ _id: queryId })
      .populate("comments")
      .then((populatedItem) => {
        return res.status(200).json({
          curQuery: populatedItem,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Some error occurred while fetching the query",
          err,
        });
      });
  } else {
    return res.status(500).json({
      message: "Some error occurred while finding the query in server",
    });
  }
};

module.exports = viewSingleQueryController;
