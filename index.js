const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

require("dotenv").config();
console.log(process.env.S3_BUCKET)

const mongoose = require("mongoose");

// app.use(async (req, res, next) => {
//   try {
//     await mongoose.connect(process.env.MONGO_DB_URI);
//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(500).send();
//   }
// });

app.get("/", (req, res, next) => {
  res.send("test");
});


app.use((req, res , next) => {
  console.log('Úse');
  next();
}
)
//activities
const activityRoutes = require("./routers/activitiesRoute");
app.use("/activities", activityRoutes);

// /users
const userRoutes = require("./routers/userRoute");
app.use("/users", userRoutes);

//main
// const mainRoute = require("./routers/mainRoute");
// app.use("/main", mainRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  
  console.log("Express server listening on port " + PORT);
});