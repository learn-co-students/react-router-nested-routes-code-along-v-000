import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

	state = {
		movies: {
			1: { id: 1, title: 'A River Runs Through It' },
			2: { id: 2, title: 'Se7en' },
			3: { id: 3, title: 'Inception' }
		}
	}

	render() {
		// We use the render function rather than component and pass
		// in routerProps which we then pass down to <MoviesPage/> as
		// its props. We're destructing those props in {...routerProps}.
		// We also pass in our movie data
		// QUESTION: What does the presence of "exact" on 32 do here?
		return (
			<Router>
				<div>
					<NavBar />
					<Route
						exact
						path="/"
						render={() => <div>Home</div>}
					/>
					<Route
						
						path='/movies'
						render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies} />}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
