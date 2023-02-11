const User = require("../models/userModel");
const Card = require("../models/cardModel");

const createCard = async (req, res) => {
  const user = await User.findById(req.user.id);
  const { name, description, address, phone, image } = req.body;
  //Check if user filled the required data
  checkExistedParams(name, description, image, phone, address);
  const newCard = await Card.create({
    name: name,
    description: description,
    address: address,
    phone: phone,
    image: image,
  });
  if (!newCard) {
    return res.status(500).json({ message: "Internal Server error" });
  }
  user.cards.push(newCard);
  await user.save();
  return res.status(201).json({ message: "Card created successfully" });
};
const readCard = async (req, res) => {
  const user = await User.findById(req.user.id);
  return res.status(200).json({ message: "OK", cards: user.cards });
};
const updateCard = async (req, res) => {
  const { name, description, address, phone, image } = req.body;
  const user = await User.findById(req.user.id);
  //Check if user filled the required data
  checkExistedParams(name, description, image, phone, address);
  user.name = name;
  user.description = description;
  user.address = address;
  user.phone = phone;
  user.image = image;
  await user.save();
  return res.status(200).json({ message: "User updated successfully" });
};
const deleteCard = async (req, res) => {
  const user = await User.findById(req.user.id);
  const toDeleteIndex = user.cards.findIndex((item) => {
    return item._id == req.cardId;
  });
  user.cards.splice(toDeleteIndex, 1);
  await user.save();
  return res.status(200).json({ message: "User deleted successfully" });
};

const checkExistedParams = (...params) => {
  for (const x of params) {
    if (!x) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }
  }
};

module.exports = { createCard, readCard, updateCard, deleteCard };
