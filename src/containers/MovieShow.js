import React from 'react';

const MovieShow = ({match, movies}) => {
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
/* match here =
{path: "movies/:movieId", url: "/movies/1", isExact: true, params: {movieId: "1"}}*/
export default MovieShow;
