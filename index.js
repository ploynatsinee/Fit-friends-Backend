const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require('cors');

const corsOptions = {
    origin: '*',
    credentials: true,
  };
app.use(cors(corsOptions))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

require("dotenv").config();

const mongoose = require("mongoose");

app.use(async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI,{dbName: "test"});
    console.log("Connect to MongoDB");
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

//activities
const activityRoutes = require("./routers/activitiesRoute");
app.use("/activities", activityRoutes);

// users
const userRoutes = require("./routers/userRoute");
app.use("/users", userRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  
  console.log("Express server listening on port " + PORT);
});
