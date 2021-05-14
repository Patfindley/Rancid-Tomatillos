import React, { Component } from 'react';
import Cards from '../Cards/Cards.js';
import MovieInfo from '../MovieInfo/MovieInfo';
import {getMovies, getSingleMovie} from '../../APIFetch'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      displayMovieInfo: false
    }
  }

  componentDidMount() {
    getMovies()
        .then(data => this.setState({movies: data.movies}))
  }

  handleClick = event => {
    this.setState({
      displayMovieInfo: !this.state.displayMovieInfo
    });
  }

  render() {
    return (
        <div>
        <nav>
          <h3>NavBar</h3>
        </nav>
          <div className="card-container">
          {this.state.displayMovieInfo &&
            <MovieInfo
            handleClick={this.handleClick}
            />
          }
          {!this.state.displayMovieInfo &&
            <Cards
            movies={this.state.movies}
            handleClick={this.handleClick}
            />
          }
          </div>
        </div>
    )
  }
}


export default App;
