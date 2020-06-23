//dependencies
const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();

//app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// esta linea de codigo evita que escribas todas las rutas para hacer el render de html!! solo tiene que usar las api.js routes 
//this code line avoid you to write all the paths to render html!! just use the api.js paths
app.use(express.static("public" , {
    extensions: ["html"]
}));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});



// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
