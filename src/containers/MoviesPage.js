// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from thie list.</h3>
      )}>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow movies={movies} {...routerProps} /> } />
  </div>
)

export default MoviesPage

//display on a particular MovieShow page available in its parent as a prop. make the movies collection available within movieshow 


