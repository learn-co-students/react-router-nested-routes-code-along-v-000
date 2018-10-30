import React from 'react';

// movies is an object in props
// also inserted Router props (match)
// within match obj, is params containing any params from URL path
// in match params, we can detect movieId defined in MoviesPage
const MovieShow = ({ match, movies }) => {

    return (
        <div>
            <h3>{ movies[match.params.movieId].title }</h3>
        </div>
    );
}


export default MovieShow