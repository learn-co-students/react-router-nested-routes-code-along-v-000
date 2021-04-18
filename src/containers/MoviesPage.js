// .src/containers/MoviesPage.js
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { match } from 'sinon';
// import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow'

function MoviesPage({match, movies}) {
  const movieLinks = Object.keys(movies).map(movieID=> <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>)

  return (
  <div>
    {movieLinks}
    <Route exact path={match.url} render={_=> <h3>Select a movie fewl</h3>} />
    <Route path={`${match.url}/:id`} render={routerProps => <MovieShow {...routerProps} movies={movies} />} />
  </div>
  )
}
// // ./App.js
// <Route path='/movies' render={_=> <MoviesPage movies={this.state.movies} />} />

// // ./MoviesPage.js
// MoviesPage = ({movies}) => (
//   <div>
//     Default route example:
//     <Route exact path="/movies" />
//     Show path:
//     <Route path='/movies/:movieID' render={routerProps => <MovieShow {...routerProps} movies={movies} />} />
//   </div>
// )

export default MoviesPage

