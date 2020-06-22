const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excersiceSchema = new Schema({
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
});


const Exercise = mongoose.model("excersice", excersiceSchema);


module.exports = Exercise;