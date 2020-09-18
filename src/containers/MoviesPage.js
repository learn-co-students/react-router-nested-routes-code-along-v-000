// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow'
//'match' is an argument we can access path info in 'routerProps" that is passed from App.js
//match contains ALL PARAMETERS FROM URL
//parameters are stored as key/value pairs in match.params
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* add 'Route' comp that will render 'MovieShow' when movie is selected */}
    {/* added code to show message t user to select movie if they haven't already */}
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>} />
    <Route path={`${match.url}/:movieID`} render={routerProps => <MovieShow {...routerProps} movies={movies} />}/>
    
  </div>
  
)

export default MoviesPage
