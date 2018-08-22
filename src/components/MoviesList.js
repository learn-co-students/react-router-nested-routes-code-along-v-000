import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
    
    // Note : "movies" is an object so need to use "Object.keys(movies).map()" to iterate over it
  const renderMovies = Object.keys(movies).map(movieID =>
  
    // Note : Added the "li" elements (with key) for personal readability
    <li key={movieID}><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;
