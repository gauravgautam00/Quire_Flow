const Query = require("../models/queryModel");

const viewCommentController = async (req, res) => {
  const query_id = req.params.query_id;

  Query.find({ _id: query_id })
    .populate("comments")
    .then((populatedQuery) => {
      // console.log("ll");
      // console.log(populatedQuery[0].comments);
      const arr = [];
      populatedQuery[0].comments.forEach((item) => {
        arr.push(item);
      });
      res.status(200).json({ comments: arr });
    })
    .catch((err) => {
      res.status(500).json({ message: `Some errorr ocurred ${err}` });
    });
};

module.exports = viewCommentController;
