
// Practice the routing folloow the exercise 26. 
const router = require("express").Router();
const workout = require("../models/workout.js");
const exercise = require("../models/exercise.js");
//Routes

// This routes are sedingned using the api.js folder in public!!

// Using ID 
//The ObjectId returns the id object created by mongoDB

router.put('/api/workouts/:id', (req, res) => {
  workout.updateOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    }
    , (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

// Add new workouts to a new workout plan.
router.post('/api/workouts', (req, res) => {
  console.log(req.body);
  workout.insertMany(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});



//Find workout plan.

router.get('/api/workouts', (req, res) => {
  workout.find({}, (err, data) => {
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
  workout.insert(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});


module.exports = router;