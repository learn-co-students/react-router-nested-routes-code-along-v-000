import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID => 
    <li><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
  );

  return(
    <div>
      <ul>
        {renderMovies}
      </ul>
    </div>
  );
};

export default MoviesList;


