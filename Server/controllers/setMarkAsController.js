const Query = require("../models/queryModel");

const setMarkAsController = async (req, res) => {
  console.log("in the setMarkAs query controller");
  const { query_id, markAsValue } = req.body;
  const curQuery = await Query.findOneAndUpdate(
    { _id: query_id },
    { markAs: markAsValue },
    { new: true }
  );
  if (!curQuery) {
    return res.status(404).json({ message: "no query found " });
  }
  console.log(curQuery, markAsValue);
  res.status(200).json({ query: curQuery });
};

module.exports = setMarkAsController;
