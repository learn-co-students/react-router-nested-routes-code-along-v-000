// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    

    
    {/* IF we wAnt to add a default page to this app */}

    <Route exact path={match.url} render={() => ( <h3>Please select a Movie from the list.</h3>)} />

{/* The below is the nested routes. */}
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow movies={movies}{...routerProps} />} />

  </div>

)

export default MoviesPage
