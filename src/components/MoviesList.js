import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesList({movies}) {

  // Object.keys(movies) grabs our keys. We map over them and for each
  // movieId property, we create a Link to /movies/${movieId}. The Link
  // title is {movies[movies[movieId].title}
  const showMovies = Object.keys(movies).map( (movieId) => {
      return <Link key={movieId} to={`/movies/${movieId}`} >
        {movies[movieId].title}
      </Link>
  });

  return (
    <div>
      {showMovies}
    </div>
  )
}
