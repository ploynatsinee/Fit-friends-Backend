const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  username: {
    type: String,
 },
  username_id: {
    type: String,
  },
  user_photo: {
    type: String,
  },
  sport: {
    required: true,
    // enum: ['running','Jogging','Swimming','Yoga','Aerobic','Strength','Other'],
    type: String,
  }, 
  location: {
    type: String,
    required: true,
  },
  captions: {
    type: String,
    required: true,
  },
  date_activites_start: {
    type: Date,
    required: true,
  },
  date_activites_end: {
    type: Date,
    required: true,
  },
  date_post: {
    type: Date,
    required: true,
  },
  activites_photo: {
    type: String,
    required: true,
  },
 
});

const activitiesModels = new mongoose.model("Activities", activitiesSchema);

module.exports = activitiesModels;