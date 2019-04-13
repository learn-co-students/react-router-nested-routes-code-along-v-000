import React from 'react';

const MovieShow = ({match, movies}) => {
	console.log('moviesShow match: ', match)

	return (
	<div className='movie'>
		<h3>{ movies[match.params.movieId].title }</h3>
	</div>
	);
}

export default MovieShow;