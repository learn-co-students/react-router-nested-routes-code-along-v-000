import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  // Note : This is just dummy code (movies would usually be fetched)
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
        <div>
          <NavBar />
          
          {/* Note : Route's "render" attribute takes an anonymous function */}
          <Route exact path="/" render={() => <div>Home</div>} />
          
          {/* Note : Route's "render" attribute also automatically passes in it's own props, which are the "routerProps" */}
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
