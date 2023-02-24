const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  name: String,
  description: String,
  address: String,
  phone: String,
  image: String,
  isVip: Boolean,
});

module.exports = mongoose.model("Card", cardSchema);
