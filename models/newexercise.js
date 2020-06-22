const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newexcersiceSchema = new Schema({
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
});


const NewExercise = mongoose.model("excersice", newexcersiceSchema);


module.exports = NewExercise;