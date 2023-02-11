const mongoose = require("mongoose");
const Card = require("./cardModel");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cards: [Card.schema],
});

module.exports = mongoose.model("User", userSchema);
