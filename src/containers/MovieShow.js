import React from 'react'

const MovieShow = ({match, movies}) => {

const matcher = movies[match.params.movieId]

  return (
    <div>
      <h3>{matcher.id}. {matcher.title}</h3>
    </div>
  )
}

export default MovieShow
