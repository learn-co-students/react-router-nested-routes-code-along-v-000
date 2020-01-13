import React from 'react';
import { Link } from 'react-router-dom';
 
//  Movies... Passed in is a props here
const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  /*  goal :  '/movies/:movieId'
The movies prop has been passed from App to MoviesPage, 
then again to MoviesList. To make the code a 
little simpler, we've used object destructuring to get to 
movies directly, rather than have to write props.movies in multiple places.

The movies prop is an object containing each movie. 
To iterate over this object, we'll use Object.keys(movies) 
to get an array of keys, then map over this array. 
Since the keys in the object are also the id values for
 each movie, the elements in .map() are referred to as 
 movieID. We can use movieID directly in some of the 
 attributes like key, but also use it to get information
  from the movies object, as we see with movies[movieID].title.

  */
    
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;