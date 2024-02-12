const User = require("../models/userModel");
const Query = require("../models/queryModel");
const QueryRecord = require("../models/queryRecordModel");

const addQueryController = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      video,
      preferences,
      isPublic,
      receiverAnonyKey,
    } = req.body;
    console.log(preferences);

    const senderAnonyKey = req.senderAnonyKey;
    // const receiverUser = await User.findOne({anonyKey:RTCEn})
    const organisation = req.organisation;
    const department = req.department;

    const receiverUser = await User.findOne({ anonyKey: receiverAnonyKey });
    const senderUserObjectId = req.senderObjectId;
    // console.log(organisation, department, receiverUser, senderUserObjectId);
    if (!receiverUser) {
      return res.status(404).json({
        message:
          "User not found , likely thia anonyKey is not associated with any User",
      });
    }

    const newQuery = await Query.create({
      title,
      description,
      organisation,
      department,
      image,
      video,
      preferences,
      isPublic,
      receiverAnonyKey: receiverUser.anonyKey,
      receiverOrganisation: receiverUser.organisation,
      receiverDepartment: receiverUser.department,
      receiverName: receiverUser.name,
    });
    // console.log("query", newQuery);

    if (!newQuery) {
      return res.status(500).json({
        message: "Some server error occurred while making new query",
      });
    }

    const relationExist = await QueryRecord.findOne({
      sender: senderUserObjectId,
      receiver: receiverUser._id,
    });
    // console.log("relation exist", relationExist);
    if (relationExist) {
      await QueryRecord.findOneAndUpdate(
        {
          sender: senderUserObjectId,
          receiver: receiverUser._id,
        },
        {
          $push: { query: newQuery._id },
        }
      );
    } else {
      await QueryRecord.create({
        sender: senderUserObjectId,
        receiver: receiverUser._id,
        query: [newQuery._id],
      });
      //   console.log("successfully made the new relation");
    }

    //FOR DEBUGGING JUST COMMENT OUT BOTTOM CODE

    QueryRecord.findOne({
      sender: senderUserObjectId,
      receiver: receiverUser._id,
    })
      .populate("sender")
      .populate("receiver")
      .populate("query")
      .then((populatedResponse) => {
        res.status(200).json({
          queryRecord: populatedResponse,
        });
      })
      .catch((err) => {
        res
          .status(500)
          .send("Some erro occurred while saaving the query" + err);
      });
  } catch (error) {
    return res.status(500).json({
      message: "Some error Occurred while adding the query",
      error,
    });
  }
};
module.exports = addQueryController;
