// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

// match is a POJO (plain old Javascript object) that contains the current url. 
// It is being passed in as part of the Router props from App. Using match, 
// we are able to show stuff depending on what the match.url returns (in this example, 
// it returns movies/)

// In the 2nd Route component we are defining a path of ${match.url}/:movieId. 
// This will load the MovieShow component when the url looks something like movies/1
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => 
    	<MovieShow movies={movies} {...routerProps} /> } />
  </div>

)

export default MoviesPage
