import React from 'react';
import { Route } from "react-router-dom";
import MovieList from "../components/MovieList";
import MovieShow from './MovieShow'

const MoviesPage = ({ match, movies }) => {
  return (
<div>

  <MovieList movies={movies}/>
  <Route exact path={match.url} render={() => (<h3>Please select a movie from the list.</h3>)} />
  <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow movies={movies} {...routerProps} />} />
</div>
)
}

export default MoviesPage;