const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authMiddleware");
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", authenticate, loginUser);

module.exports = router;
