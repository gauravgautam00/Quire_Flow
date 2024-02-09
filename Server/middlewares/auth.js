const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "User not authorized first login please " });
    }
    token = token.split(" ")[1];
    // console.log(req);
    const isTokenVerified = jwt.verify(token, process.env.SECRET_KEY);
    if (!isTokenVerified) {
      return res.status(401).json({ message: "Unauthorized user" });
    } else {
      const payload = isTokenVerified;
      req.senderAnonyKey = payload.anonyKey;
      req.organisation = payload.organisation;
      req.department = payload.department;
      req.senderObjectId = payload.objectId;
      //   console.log("payload", payload);
    }

    next();
  } catch (err) {
    console.log("Some error occurred in server in auth.js middleware", err);
    return res.status(500).json({
      message:
        "Some server error occurred while checking the authentication in auth middleware",
      err,
    });
  }
};
module.exports = auth;
