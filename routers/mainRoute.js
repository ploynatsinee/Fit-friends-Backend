const express = require("express");
const mainRoute = express.Router();
const mainController = require("../controllers/mainControllers")

//import model
const ActivityModel = require("../models/activitiesModels");
const User = require("../models/userModels");

mainRoute.get("/user", mainController.showUserOnline)

module.exports = mainRoute;