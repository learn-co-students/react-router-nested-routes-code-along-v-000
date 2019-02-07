// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

// match is a prop of any route, so it's passed down to us from app as
// one of our route props. That match property (or is it a method) has a url property that
// we can use in our path when rendering "Please select a movie" and 
// in our path when rendering MovieShow 
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
    <Route 
      path={`${match.url}/:movieId`} 
      render={routerProps => 
        <MovieShow movies={movies} {...routerProps} />
      }
    />
  </div>

)

export default MoviesPage
