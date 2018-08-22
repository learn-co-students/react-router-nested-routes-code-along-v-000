// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

// Note : "match" is simply a props POJO (plain old Javascript object) that contains the current url from Route's routerProps in App
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
    
    {/* Note : Load the MovieShow component ONLY if the current url looks like the below path
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    
    Note : The the below calls the MovieShow component AND makes the movies available to it (via props)  */}
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow movies={movies} {...routerProps} /> }/>
  </div>
)

export default MoviesPage
