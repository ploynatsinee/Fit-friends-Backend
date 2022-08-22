const express = require("express");
const Activities = require("../models/activitiesModels");

const activityRoutes = express.Router();

const activitiesController = require("../controllers/activitiesController");

activityRoutes.param("activity_id", async (req, res, next, activity_id) => {
  const activity = await Activities.findOne({
    activity_id: activity_id,
  });

  if (!activity) {
    return res.status(404).send();
  }

  req.activity = activity;

  next();
});

//show activity
activityRoutes.get("/", activitiesController.getAllActivities);


//show activity community??? /activity?date-time 
// activityRoutes.get("/activity?date-time", activitiesController.getAllActivities);

//filter show activity community??? /activity?running&date-time
activityRoutes.get("/activity/:sport", activitiesController.filterActivities);

// //for notification aggergate (count) /activity_types/running/count
activityRoutes.get("/activity_types/:sport", activitiesController.countActivities)

activityRoutes.get("/:activity_id", activitiesController.getActivityById);

activityRoutes.post("/", activitiesController.createActivity);

activityRoutes.put("/:activity_id", activitiesController.editActivityById);

activityRoutes.delete("/:activity_id", activitiesController.removeActivityById);




module.exports = activityRoutes;