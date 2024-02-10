const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Query = require("../models/queryModel");

const addCommentController = async (req, res) => {
  //   console.log("add comment controller");
  const { content, query_id } = req.body;
  const senderObjectKey = req.senderObjectId;

  const curQuery = await Query.findOne({
    _id: query_id,
  });
  //   console.log(senderObjectKey);

  if (!curQuery) {
    return res.status(404).json({
      message: "Can't load the comment because no query founded",
    });
  }

  const newComment = await Comment.create({
    user: senderObjectKey,
    content,
  });
  //   console.log("sender object key", senderObjectKey);

  if (!newComment) {
    return res.status(500).json({
      message:
        "Some server error occurred while adding new comment PLease try again later",
    });
  }

  const updatedQuery = await Query.findOneAndUpdate(
    {
      _id: query_id,
    },
    {
      $push: { comments: newComment._id },
    },
    {
      new: true,
    }
  );

  if (!updatedQuery) {
    return res.status(500).json({
      message:
        "Some error occurred while adding the comment in addCommentController.js",
    });
  } else {
    Query.find({ _id: query_id })
      .populate("comments")
      .then((populatedQuery) => {
        const arr = [];
        populatedQuery[0].comments.forEach((item) => {
          arr.push(item);
        });
        res.status(200).json({ comments: arr });
      })
      .catch((err) => {
        res.status(500).json({ message: `Some errorr ocurred ${err}` });
      });
  }
};

module.exports = addCommentController;
