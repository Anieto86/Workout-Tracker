
// Practice the routing folloow the exercise 26. 
const router = require("express").Router();
const workout = require("../models/workout.js");
const exercise = require("../models/exercise.js");
//Routes

// Add new workouts to a new workout plan.

router.post('/api/workout', (req, res) => {
    console.log(req.body);  
    workout.insertMany(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  });


  router.get('/api/workout', (req, res) => {
    workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  
  
  //Add  exercises  to a previous workout plan.
  
router.post('/api/exercise', (req, res) => {
    console.log(req.body);  
    exercise.insert(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  });

  
  
  router.get('/api/exercise', (req, res) => {
    exercise.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });




  
  //Add new exercise to a new workout plan (stats -page)
  
 router.post('/api/stats', (req, res) => {
  console.log(req.body);  
  exercise.insert(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  });
  




  module.exports = router;