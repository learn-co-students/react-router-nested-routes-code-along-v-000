import React from "react";

export default ({ movies, match }) => (
  <div>
    <h3>{movies[match.params.movieId].title}</h3>
  </div>
);
