const express = require("express");
const router = express.Router();
const { authneticate } = require("../middlewares/authMiddleware");
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", authneticate, loginUser);

module.exports = router;
