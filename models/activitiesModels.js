const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  username: {
    type: String,
 },
  username_id: {
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
    type: Datetime,
    required: true,
  },
  date_activites_end: {
    type: Datetime,
    required: true,
  },
  date_post: {
    type: Datetime,
    required: true,
  },
  activites_photo: {
    type: String,
    required: true,
  },
 
});

const activitiesModels = new mongoose.model("Activities", activitiesSchema);

module.exports = activitiesModels;