const express = require('express');
const { requiresArg } = require('yargs');
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
});

//GET MOVIES
router.get("/", (req, res) => {
  const movieList = Object.values(title)
  if(req.query.search) {
    const filteredMoviesList = movies.filter(movie => movie.title.includes(req.query.search));
    res.status(200).send(filteredMoviesList)
  } else {
    res.status(200).send("All movies: " + movieList)
  }
});

//GET MOVIES BY ID
router.get("/:id", (req, res) => {
  const movie = movies.find(movie => movie.id === parseInt(req.params.id));
  if (!movie) res.status(404).send(`The movie with id: ${req.params.id} does not exist`)
  res.status(200).send(movie);
});

//ADD A NEW MOVIE
router.post("/", (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    runtime: req.body.runtime,
    release_year: req.body.release_year,
    director: req.body.director,
  };
  movies.push(movie);
  res.status(201).send(`Movie saved: ${movie}`);
});

// router.delete()
router.delete("/:id", (req, res) => {
  const movie = movies.find(movie => movie.id === parseInt(req.params.id));
  if (!movie) res.status(404).send(`The movie with id: ${req.params.id} does not exist`)

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.send(`Movie deleted: ${movie.title}`)
})

module.exports = router;
