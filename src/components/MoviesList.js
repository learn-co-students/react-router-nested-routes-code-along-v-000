import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );
//THis is to list all the movies, their names, and link the url for rendering without refreshing. The render comes from the MoviesPage, the parent.
//Once this is clicked, we go straight to the MovieShow page after the parent, MoviesPage renders the component
  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;
