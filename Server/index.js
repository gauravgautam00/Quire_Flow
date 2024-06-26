const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
connectDB();
const cors = require("cors");
app.use(
  cors({
    origin: ["https://quire-flow-fk1u.vercel.app/", "http://localhost:3000"],
    // methods: ["GET", "POST"],
    // allowedHeaders: ["Content-Type", "my-custom-header"],
    // credentials: true,
  })
);
app.use(cors());

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const viewQueryRoutes = require("./routes/viewQueryRoutes");
const addQueryRoutes = require("./routes/addQueryRoutes");
const viewSingleQueryRoutes = require("./routes/viewSingleQueryRoutes");
const setMarkAsRoutes = require("./routes/setMarkAsRoutes");
const addCommentRoutes = require("./routes/addCommentRoutes");
const viewCommentRoutes = require("./routes/viewCommentRoutes");
const publicQueryRoutes = require("./routes/publicQueryRoutes");
const profileRoutes = require("./routes/profileRoutes");
app.use("/", authRoutes);

app.use("/addQuery", addQueryRoutes);
app.use("/viewQuery", viewQueryRoutes);
app.use("/viewSingleQuery", viewSingleQueryRoutes);
app.use("/setMarkAs", setMarkAsRoutes);
app.use("/addComment", addCommentRoutes);
app.use("/viewComment", viewCommentRoutes);
app.use("/public", publicQueryRoutes);
app.use("/profile", profileRoutes);

const port = process.env.PORT || 2300;
app.listen(port, () => {
  console.log("Server is up on port No.", port);
});
