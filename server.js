//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});




//Routes

//Add exercises to a previous workout plan.

app.get('/exercise', (req, res) => {


});



// Add new exercises to a new workout plan.

app.get('/workout', (req, res) => {


});


//Add new exercises to a new workout plan (stats -page)


app.get('/stats', (req, res) => {


});




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
