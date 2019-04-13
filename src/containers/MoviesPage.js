// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = ({ match, movies }) => {
	console.log('moviesPage match: ', match)
	return (
  <div>
    <MoviesList movies={movies} />
    <Route 
    	path={match.url} 
    	render={ () => (
    		<h3>Please select a Movie from the list.</h3> 
		)}/>

    <Route 
    	path={`${match.url}/:movieId`} 
    	render={ routerProps => 
    		<MovieShow 
    			movies={movies} {...routerProps} 
			/>
		}
    />
  </div>
);
}

export default MoviesPage
