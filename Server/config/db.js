const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected with ", connect.connection.host);
  } catch (err) {
    console.log("Some error occurred while connecting to database", err);
  }
};

module.exports = connectDB;
