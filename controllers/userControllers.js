const User = require("../models/userModels");

const { v4: uuidv4 } = require("uuid");

const createUser = async (req, res, next) => {
  const newUser = new User({ user_id: uuidv4(), ...req.body });
  try {
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUserById = async (req, res, next) => {
  const { user_id } = req.params;
  const user = await User.findOne({ user_id });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.send(user);
};

const getUserAll = async (req, res, next) => {
  console.log("Hello")
  const users = await User.find()
  console.log(users)
  res.send(users.map((users)=> users.toJSON()))
};

module.exports = {
  createUser,
  getUserById,
  getUserAll,
};