// .src/components/MovieShow.js
import React from 'react';
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from MoviesPage.js 
const MovieShow = ({match, movies}) => {
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
      <p>Director: { movies[match.params.movieId].director }</p>
      <p>Rated: { movies[match.params.movieId].rated }</p>
    </div>
  );
}
 
export default MovieShow;