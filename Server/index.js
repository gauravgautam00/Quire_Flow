const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
connectDB();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/", authRoutes);

const port = process.env.PORT || 2300;
app.listen(port, () => {
  console.log("Server is up on port No.", port);
});
