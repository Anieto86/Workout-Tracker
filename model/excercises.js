const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

    //query



});


const Excercise =  mongoose.model("Exercise" , ExerciseSchema );


module.exports = Excercise;