import React from 'react'

const MovieShow = ({match, movies}) => {
  return(
    <div>
      <h2>{movies[match.params.movieId].title}</h2>

    </div>
  )
}

export default MovieShow
