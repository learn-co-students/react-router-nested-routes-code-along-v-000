import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  
  const renderMovies = Object.keys(movies).map(movieID =>
    <ul>
      <li><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
    </ul>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;
 