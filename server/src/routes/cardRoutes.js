const express = require("express");
const {
  readCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardsController");
const { authneticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(authneticate, createCard)
  .get(authneticate, readCard)
  .put(authneticate, updateCard)
  .delete(authneticate, deleteCard);

module.exports = router;
