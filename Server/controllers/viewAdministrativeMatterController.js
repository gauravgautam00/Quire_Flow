const queryRecordModel = require("../models/queryRecordModel");
const User = require("../models/userModel");

const viewAdministrativeMatterController = async (req, res) => {
  const senderAnonyKey = req.senderAnonyKey;
  console.log(senderAnonyKey);
  const curUser = await User.findOne({ anonyKey: senderAnonyKey });
  //   console.log(req);
  if (curUser) {
    queryRecordModel
      .find({
        receiver: curUser._id,
      })
      .populate("query")
      .then((populatedQuery) => {
        const arr = [];
        populatedQuery.forEach((item) => {
          arr.push(item.query);
        });
        return res.status(200).json({ queries: arr });
      })

      .catch((err) => {
        return res
          .status(500)
          .send("Some error occured while fetching the query" + err);
      });
  } else {
    return res.status(404).send("No such user present");
  }
};
module.exports = viewAdministrativeMatterController;
