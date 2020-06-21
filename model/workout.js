const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
    type: {
        type: String,

    },
    name:{
        type: String, 

    },
    duration: {
        type: Number, 
        required: "Time"
    },
    weight: {
        type: Number, 
        

    },
    reps: {
        type: Number, 
        required: "Number of Reps"

    },
    sets:{
        type: Number, 
        required: "Number of Sets"
    },



});


const Workout =  mongoose.model("Exercises" , Workout);


module.exports = Workout;