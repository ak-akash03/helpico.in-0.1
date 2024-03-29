const jwt = require("jsonwebtoken");
const User = require("../model/user.modal");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP, token not provided : " });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  // console.log("token form auth middleware", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
    const userData = await User.findOne({ email: isVerified.email });
    
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "unauthorized : Invalid token :  " });
  }
};

module.exports = authMiddleware;
 
