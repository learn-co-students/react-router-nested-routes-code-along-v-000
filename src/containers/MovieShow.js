import React from 'react';

// match carries along url routing, and movies is passed in from parent (and from its parent.addEventListener.apply.) 
const MovieShow = ({match, movies}) => {
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
 
export default MovieShow;