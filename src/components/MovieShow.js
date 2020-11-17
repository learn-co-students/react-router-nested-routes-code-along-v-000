import React from 'react';

const MovieShow = ({match,movies}) => {

    return (
        <div>
            <h3> {movies[match.paramas.movieID].title } </h3>
        </div>
    )
}

export default MovieShow;