const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Number,
        dafaulut: Date.now,
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: true,
        },
        type: {
            type: String,
            trim: true,
            required: true,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        duration: {
            type: Number,
            required: true,
            default: Date.now,
        },
        distance: {
            type: Number,

        }
    }],

});


const Workout = mongoose.model("workout", workoutSchema);


module.exports = Workout;