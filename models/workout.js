const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    day:{
        type: Number,
    },
    Exercises: [{
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
            required: "Number of Reps"
        },
        sets: {
            type: Number,
            required: "Number of Sets"
        },      
        duration: {
            type: Number,
            required: "Time",
            dafaulut:Date.now,
        },
    }],

    cardioExercises: [{
        name: {
            type: String,
            trim: true,
            },
        duration: {
            type: Number,
            required: "Time",
            dafaulut:Date.now,
        },
        distance: {
            type: Number,
            required: "Distance"
        }
    }]
});


const Workout = mongoose.model("workout", workoutSchema);


module.exports = Workout;