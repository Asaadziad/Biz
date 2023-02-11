const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  name: String,
  description: String,
  address: String,
  phone: String,
  image: String,
});

module.exports = mongoose.model("Card", cardSchema);
