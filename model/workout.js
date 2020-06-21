const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    day:{
        type: Number,
    },
    
    
    Exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
            required: "Time",
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
        }
    }]
});


// or  

// exercises: [
//     {
//       type: String,
//       name: String,
//       duration: Number, 
//       weight:  Number,
//       reps:  Number,
//       sets:  Number
//     }
//   ]

const workoutSchema = mongoose.model("workout", workoutSchema);


module.exports = workout;