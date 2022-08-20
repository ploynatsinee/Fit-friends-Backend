const Activities = require("../models/activitiesModels");

const { v4: uuidv4 } = require("uuid");

const getAllActivities = async (req, res, next) => {
  const activities = await Activities.find({
    // user_id: "291e7fa0-6c5b-4568-b570-3a71df030b1d",
  });
  res.send(activities);
};

const getActivityById = async (req, res, next) => {
  res.send(req.activity);
};

const User = require("../models/userModels");
const activitiesModels = require("../models/activitiesModels");

//add filter and count
const filterActivities = async (req, res, next) => {
  // let date = new Date()
  // date.setDate(date.getDate() - 10)
  // const filterSidebar = await activitiesModels.aggregate([
  //   ([{ date: { "$eq": date } }] )
  // ]);
  
  // res.send(filterSidebar);
  // const isToday = (someDate) => {
  //   const today = new Date()
  //   return someDate.getDate() == today.getDate()
  // }
  // if(isToday) {
    
  // }
  return res.send(req.activity);
} 


const countActivities = async (req, res, next) => {
  let date = new Date()
  date.setDate(date.getDate() - 10)
  const countNumber = await activitiesModels.aggregate([
    ([{ "$match": { date: { "$gte": date } } }, { "$group": { "_id": "$sport", "count": { "$sum": 1 } } }])
  ]);
  res.send(countNumber);
}

const createActivity = async (req, res, next) => {
  const user = await User.findOne({
    user_id: "2c8e29c4-21c8-4995-a189-1b23aef78928",
  });

  try {
    const newActivity = new Activities({
      activity_id: uuidv4(),
      owner: user._id,
      ...req.body,
    });
    await newActivity.save();
    res.send(newActivity);
  } catch (error) {
    res.status(400).send(error);
  }
};

const editActivityById = async (req, res, next) => {
  const { captions, sport, date, location } = req.body;

  if (captions) req.activity.captions = captions;
  if (sport) req.activity.sport = sport;
  if (date) req.activity.date = date;
  if (location) req.activity.location = location;

  await req.activity.save();

  res.send(req.activity);
};

const removeActivityById = async (req, res, next) => {
  await req.activity.remove();

  res.status(204).send();
};

module.exports = {
  getAllActivities,
  getActivityById,
  createActivity,
  editActivityById,
  removeActivityById,
  filterActivities,
  countActivities,
};