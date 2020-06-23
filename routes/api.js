// Practice the routing folloow the exercise 26. 
const router = require("express").Router();
const workout = require("../models/workout.js");
//Routes

// This routes are sedingned using the api.js folder in public!!

// Using ID 
//The ObjectId returns the id object created by mongoDB
router.put('/api/workouts/:id', (req, res) => {
  console.log(req.params.id);

  workout.updateOne(
    {
      _id: req.params.id
    }
    , (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post('/api/workouts', (req, res) => {
  console.log(body);
  console.log(req.body);
  workout.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
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
  workout.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;