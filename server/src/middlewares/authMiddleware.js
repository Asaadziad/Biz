const jwt = require("jsonwebtoken");

const authneticate = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //verification token (decoded)
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

      //send the user id to next function in line through req
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "Unauthorized token" });
  }
};

module.exports = { authneticate };
