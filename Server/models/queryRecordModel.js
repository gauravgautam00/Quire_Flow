const mongoose = require("mongoose");

const QueryRecordSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    query: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Query",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QueryRecord", QueryRecordSchema);
