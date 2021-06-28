// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import the `MovieShow` component:
import MovieShow from '../components/MovieShow';
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from App.js 
// const MoviesPage = ({ match, movies }) => (
//   <div>
//     <MoviesList movies={movies} />
//     // We also add a `Route` component that will render `MovieShow`
//     // when a movie is selected
//     <Route path={`${match.url}/:movieId`} component={MovieShow}/>
//   </div>
// )

// const MoviesPage = ({ match, movies }) => (
//   <div>
//     <MoviesList movies={movies} />
//     // Adding code to pass the movies to the `MovieShow` component
//     <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} /> }/>
//   </div>
// )

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    // Adding code to show a message to the user to select a movie if they haven't yet
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)
 
export default MoviesPage