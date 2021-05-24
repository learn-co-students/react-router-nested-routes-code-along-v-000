// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* We also add a `Route` component that will render `MovieShow`
    when a movie is selected */}
    {/* <Route path={`${match.url}/:movieId`} component={MovieShow}/> */}
    {/* // Here we replace the `component` prop with the `render` prop so we can pass the 
    // route information to the `MovieShow` component */}
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)

export default MoviesPage
