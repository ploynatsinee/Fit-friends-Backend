const Activities = require("../models/activitiesModels");
const User = require("../models/userModels");
const { v4: uuidv4 } = require("uuid");

const getAllActivities = async (req, res, next) => {
  console.log(req.query)
  const dayPicker = req.query.date
  console.log(dayPicker)
  if (dayPicker === undefined) {console.log("ä")
    const activities = await Activities.find({});
    res.send(activities);
    
  } else {
    var dateEnd = new Date(dayPicker)
    dateEnd.setHours(30, 59, 59)
    console.log(dateEnd)
    var dateStart = new Date(dayPicker)
    console.log(dateStart)
    console.log("b")
    const activities = await Activities.find({
      $and:
        [{
          "date_post":
            { $lt: (dateEnd) }
        },
        { "date_post": { $gt: (dateStart) } }]
    });
    res.send(activities);

  }

};

const getActivityById = async (req, res, next) => {
  res.send(req.activity);
};

//add filter and count
const filterActivities = async (req, res, next) => {
  const { sport } = req.params
  let date = new Date()
  date.setDate(date.getDate() - 1)
  try {
    const filterSport = await Activities.aggregate([
      { "$match": { date_post: { $gte: date } } },
      { "$match": { sport: sport } },
      { "$project": { "_id": 0 } }
    ])


    return res.status(200).send(filterSport)
  }
  catch (error) {
    res.status(400).send(error.message);
  }

}

const countActivities = async (req, res, next) => {
  const { sport } = req.params
  let date = new Date()
  date.setDate(date.getDate() - 1)
  console.log(date)
  try {
    const countNumber = await Activities.aggregate([
      { "$match": { date_post: { $gte: date } } },
      { "$match": { sport: sport } },
      { "$group": { "_id": "$sport", "count": { "$sum": 1 } } },
      { "$project": { "_id": 0 } }
    ])

    if (countNumber.length > 0) {
      console.log(typeof countNumber[0].count.toString())
      res.status(200).send(countNumber[0].count.toString());
    } else {
      return res.status(200).send("0");
    }

  } catch (error) {
    res.status(400).send(error.message);
  }

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