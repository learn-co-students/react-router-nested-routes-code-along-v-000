import React from 'react';
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from MoviesPage.js 
const MovieShow = ({match, movies}) => {
  return (
    <div>
      // And here we access the `movieId` stored in match.params to render 
      // information about the selected movie
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
 
export default MovieShow;