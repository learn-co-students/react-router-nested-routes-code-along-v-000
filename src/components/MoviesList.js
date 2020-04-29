import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(movieID => {
        return (
            <h5 key={movieID}><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></h5>
        )
    })

    return (
        <div>
            {renderMovies}
        </div>
    )
}

export default MoviesList;
