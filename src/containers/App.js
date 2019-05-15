import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import MoviesPage from "./MoviesPage";
import abc from "../components/abc";

class App extends Component {
  state = {
    movies: {
      1: { id: 1, title: "A River Runs Through It" },
      2: { id: 2, title: "Se7en" },
      3: { id: 3, title: "Inception" }
    }
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={abc} />
          <Route
            path="/movies"
            render={routerProps => (
              console.log(routerProps),
              <MoviesPage {...routerProps} movies={this.state.movies} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
