const mongoose = require("mongoose");
const activitiesModels = require("./activitiesModels")

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  activity_id: {
    type: String,
    required: true,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  age: {
    type: Number,
    default: 0,
  },
  weight: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
  bmi: {
    type: Number,
    default: 0,
  },
  user_photo: {
    type: String,
    required: true,
  },

});

const userModels = new mongoose.model("User", userSchema);

module.exports = userModels;