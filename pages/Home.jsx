import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'



const API_URL = "http://localhost:3001/movies"

function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setMovies(response.data)
        })

    }, [movies])

    if (!movies) return null
    return (
        <>
            <div className="container-fluid">
                <div className="row card-group justify-content-center">
                    {movies.map(movie =>
                        <div className="col-sm-2 m-1 movie-card">
                            <div className="img-wrapper m-2">
                                <img src={movie.imgUrl} alt="" width="70" height="auto" />
                            </div>
                            <div className="content-wrapper p-1">
                                <span className="movieName">{movie.name}</span>
                                <span className="movieRating">Rating: {movie.rating}/10</span>
                                <span className="movieReleaseDate">Released: {movie.releaseDate}</span>
                            </div>

                        </div>

                    )}


                </div>
            </div>
        </>
    )
}

export default Home