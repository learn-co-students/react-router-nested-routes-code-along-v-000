import React from 'react';

const MovieShow = ({match, movies}) => (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  )
export default MovieShow;
