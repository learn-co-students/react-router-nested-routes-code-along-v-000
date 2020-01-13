import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {
//  Contat
  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router> 
        {/*  Covers everything in routes */}
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>

   /*  Main points here.  
      
      So, if the URL path matches /movies, the function inside render is called. The object that is passed in, routerProps, get passed in as props. 
      Using the spread operator ({...routerProps}) will result in the creation of props for each key present inside the routerProps object. This isn't vital but is a helpful way to pass many props in without too much code clutter.

So, the component, MoviesPage, 
receives props from the Route that
 contain information on the route.
  In addition, we can also pass in other props,
   as we see with movies={this.state.movies}.
      
      */
      
    );
  }
}

export default App;
