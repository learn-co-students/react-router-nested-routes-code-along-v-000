import React from 'react';
 
 // Note : Just renders the below h3
// const MovieShow = props => {
 
//   return (
//     <div>
//       <h3>Movies Show Component!</h3>
//     </div>
//   );
// }
 
// Note : Extracts the "match" (current url) and "movies" from props
const MovieShow = ({match, movies}) => {
  return (
    <div>
    
    {/* Note : Extracting the movieId param from the "match" object to show only the relevant movie info */}
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}

export default MovieShow;
