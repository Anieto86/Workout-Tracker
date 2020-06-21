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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });



//Routes

//Add exercises to a previous workout plan.

app.get('/exercise', (req, res) => {

});



// Add new exercises to a new workout plan.

app.get('/newExercise', (req, res) => {

});


//Add new exercises to a new workout plan (stats -page)


app.get('/stats', (req, res) => {

});




app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  