import React from "react";

const MoiveShow = ({ match, movies }) => {
  return (
    <div>
      <h3>{movies[match.params.movieId].title}</h3>
    </div>
  );
};

export default MoiveShow;
