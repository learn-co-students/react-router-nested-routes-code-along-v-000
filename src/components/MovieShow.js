import React from 'react';

function MovieShow({movies, match}) {
  return (
    <div>
      <h4>{movies[match.params.id].title}</h4>
    </div>
  );
}

export default MovieShow;
