// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
 
const MoviesPage = ({ match, movies }) => (
  <div>
    
    <Route exact path={match.url} render={() => (
    <h3>Please select a Movie from the list.</h3>
    )}/>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
    </div>
)
 
export default MoviesPage