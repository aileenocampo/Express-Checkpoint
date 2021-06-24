const express = require('express');
var router = express.Router();

// IN-MEMORY STORAGE FOR MOVIES
const movies = [
  {
  "id": 1,
  "title": "Midnight In Paris",
  "runtime": 96,
  "release_year": 2011,
  "director": "Woody Allen",
  },
  {
  "id": 2,
  "title": "Titanic",
  "runtime": 210,
  "release_year": 1997,
  "director": "James Cameron",
  },
  {
  "id": 3,
  "title": "From Paris With Love",
  "runtime": 94,
  "release_year": 2010,
  "director": "Pierre Morel",
  },
];


//GET MOVIES
router.get("/", (req, res) => {
  res.status(200).send(movies);
})

router.get("/:id", (req, res) => {
  const { movieId } = req.params;
  console.log(req.params);
  if (!movies[movieId]) {
    res.status(404).send(`Student ${movieId} not found!`)
  } else {
    res.status(200).send(movies)
  }
})

module.exports = router;
