import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID => (
    <ul key={movieID}>
      <Link key={movieID} to={`/movies/${movieID}`}>
        {movies[movieID].title}
      </Link>
    </ul>
  ));

  return <div>{renderMovies}</div>;
};

export default MoviesList;
