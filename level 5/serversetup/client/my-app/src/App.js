import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./components/Movie";
import AddMovieForm from "./components/AddMovieForm";

export default function App () {
    const [movies, setMovies] = useState([])

    function getMovies(){
        axios.get('/movies')
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getMovies()
    }, [])

    function addMovie (newMovie){
        axios.post('/movies', newMovie)
            .then(res => {
                setMovies(prev => [...prev, res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="movie-container">
            <AddMovieForm addMovie={addMovie}/>
            {movies.map(movie => <Movie {...movie} key={movie.title}/>)}
        </div>
    )
}