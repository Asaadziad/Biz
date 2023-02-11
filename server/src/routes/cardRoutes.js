const express = require("express");
const {
  readCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardsController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(authenticate, createCard)
  .get(authenticate, readCard)
  .put(authenticate, updateCard)
  .delete(authenticate, deleteCard);

module.exports = router;
