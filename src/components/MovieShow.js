import React from 'react'
//  Create a comppnets from MoviesPage. Because it nested in it. so we
//  we can go to  /movies/:movieId

const MovieShow = ({ match, movies }) => {
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  )
}

export default MovieShow
