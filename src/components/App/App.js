import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Cards from '../Cards/Cards.js';
import MovieInfo from '../MovieInfo/MovieInfo';
import { getMovies, getSingleMovie } from '../../APIFetch'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      displayMovieInfo: false
    }
  }

  componentDidMount() {
    getMovies()
    .then(data => this.setState({movies: data.movies}))
  }

  returnHome = () => {
    this.setState({
      displayMovieInfo: false
    })
  }

  showSelectedMovie = (id) => {
    getSingleMovie(id)
    .then(data => this.setState({selectedMovie: data.movie})
    )
  }

  handleClick = event => {
    this.showSelectedMovie(event.target.id)
    this.setState({
      displayMovieInfo: !this.state.displayMovieInfo
    });
  }

  render() {
    return (
        <div className='site-container'>
          <Nav
          displayMovieInfo={this.state.displayMovieInfo}
          returnHome={this.returnHome}
          />
          <section className='movie-display'>
            <div className="card-container">
              {this.state.displayMovieInfo && this.state.selectedMovie &&
                <MovieInfo
                selectedMovie={this.state.selectedMovie}
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
          </section>
        </div>
    )
  }
}


export default App;
