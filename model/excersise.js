const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excersiceSchema = new Schema({

    Exercise: [{
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
    }],
});


const excersiceSchema = mongoose.model("excersice", excersiceSchema);


module.exports = excersice;