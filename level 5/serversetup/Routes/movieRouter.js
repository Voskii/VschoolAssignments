const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const movies = [
    {title: 'die hard', genre: 'action', _id: uuidv4()},
    {title: 'gone in 60 seconds', genre: 'action', _id: uuidv4()},
    {title: 'titanic', genre: 'drama', _id: uuidv4()},
    {title: 'blade 2', genre: 'action', _id: uuidv4()},
]


movieRouter.route('/')
//Get all
    .get((req, res) => {
        res.send(movies)
    })
    // Post One
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(newMovie)
    })
    
// Get One
movieRouter.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// Get by Genre

movieRouter.get('/search/genre', (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})



//Delete One
movieRouter.delete('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send('Successfully deleted movie!')
})

//Update One
movieRouter.put('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)

})

module.exports = movieRouter