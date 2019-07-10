import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MoviesList extends Component{
    const MoviesList = ({ movies }) => {
        const renderMovies = Object.keys(movies).map(movieID =>
          <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        );

                return(
                    <div>
                     {renderMovies}
                    </div>
                )
            }
}