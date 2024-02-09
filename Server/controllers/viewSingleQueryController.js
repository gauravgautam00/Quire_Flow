const Query = require("../models/queryModel");

const viewSingleQueryController = async (req, res) => {
  const queryId = req.params.queryId;
  console.log(queryId);
  const curQuery = await Query.findOne({ _id: queryId });

  if (curQuery) {
    return res.status(200).json({
      curQuery,
    });
  } else {
    return res.status(500).json({
      message: "Some error occurred while finding the query in server",
    });
  }
};

module.exports = viewSingleQueryController;
