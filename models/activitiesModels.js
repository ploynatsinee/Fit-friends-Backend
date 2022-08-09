const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  activity_id: {
    type: String,
    required: true,
  },
  sport: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  time_start: {
    type: String,
    required: true,
  },
  time_end: {
    type: String, 
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  captions: {
    type: String,
    required: true,
  },
  sport_photo: {
    type: String,
    required: true,
  },

});

const activitiesModels = new mongoose.model("Activities", activitiesSchema);

module.exports = activitiesModels;