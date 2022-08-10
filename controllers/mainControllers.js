const express = require("express");
const mainRoutes = express.Router();

const ActivityModel = require("../models/activitiesModels");
const userModel = require("../models/userModels");

const router = express.Router();

const showUserOnline = async (req, res, next) => {
    // const { user_id } = req.params;
    req.send("ploy user id")
    // const user = await User.findOne({ user_id });
  
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
  
    res.send(user);
  };