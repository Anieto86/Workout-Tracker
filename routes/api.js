// Practice the routing folloow the exercise 26. 
const router = require("express").Router();
const workout = require("../models/workout.js");
//Routes

// This routes are sedingned using the api.js folder in public!!

// Using ID 
//The ObjectId returns the id object created by mongoDB // why is no necesary the ObjectId? 
router.put('/api/workouts/:id', (req, res) => {
  console.log(req.params.id);
  workout.updateOne(
    {
      id:req.params.id   //the problem was _id when I remove "_" in id the 
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

//Find workout plan (stats -page)

router.get('/api/workouts/rage', (req, res) => {
  workout.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;