const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const movies = [
    {title: 'die hard', genre: 'action', _id: uuidv4()},
    {title: 'gone in 60 seconds', genre: 'action', _id: uuidv4()},
    {title: 'titanic', genre: 'drama', _id: uuidv4()},
    {title: 'blade 2', genre: 'action', _id: uuidv4()},
]

movieRouter.get('/', (request, response) => {
    response.send(movies)
})

movieRouter.post('/', (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database`)
})

movieRouter.route('/')
    .get((req, res) => {
        res.send(movies)
    })

    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database`)
    })

module.exports = movieRouter