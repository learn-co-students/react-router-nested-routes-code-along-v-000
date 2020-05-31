import React from 'react';
import { Link } from 'react-router-dom';

// movies: {
//     1: { id: 1, title: 'A River Runs Through It' },
//     2: { id: 2, title: 'Se7en' },
//     3: { id: 3, title: 'Inception' }
//   }


const MoviesList = ( {movies}) => {
    const renderMovies = Object.keys(movies).map(movieID => 
        <Link key={movieID} to={`/movies/${movieID}`}>
            {movies[movieID].title}
        </Link>
        );
    
    return(
        <div>
            {renderMovies}
        </div>
    );
};

export default MoviesList;