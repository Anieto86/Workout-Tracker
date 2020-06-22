//dependencies
const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();

//app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public" , {
    extensions: ["html"]
}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// //Routes

// // Add new exercises to a new workout plan.

// app.post('/workout', (req, res) => {
//   console.log(req.body);  
//   db.workouts.insert(req.body, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(data);
//     }
//   });
// });


// //Add workouts to a previous workout plan.

// app.post('/exercise', (req, res) => {
//   console.log(req.body);  
//   db.exercises.insert(req.body, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(data);
//     }
//   });
// });


// //Add new exercises to a new workout plan (stats -page)


// app.get('/stats', (req, res) => {

// });


// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
