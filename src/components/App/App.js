import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Cards from '../Cards/Cards.js';
import MovieInfo from '../MovieInfo/MovieInfo';
import { getMovies, getSelectedMovie } from '../../APIFetch'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      selectedMovieTrailer: null,
      error: ""
    }
  }

  componentDidMount() {
    getMovies()
        .then(data => {
          this.setState({movies: data.movies})
  })
    .catch(error => {
      this.setState({error: error.message})
    })
  }

  showSelectedMovie = (id) => {
    getSelectedMovie(id)
        .then(data => {
            this.setState({
            selectedMovie: data.selectedMovieDetails,
            selectedMovieTrailer: data.selectedMovieTrailer
          })
        })
        .catch(error => {
          this.setState({error: error.message})
        })
  }

  handleClick = event => {
    this.showSelectedMovie(event.target.id)
    this.setState({displayMovieInfo: !this.state.displayMovieInfo});
  }

  render() {
    return (
        <div className='site-container'>
          <Nav
          />
          <section className='movie-display'>
            <div className="card-container">
              <Switch>
                <Route exact path='/'
                       render={() =>
                           <Cards
                               movies={this.state.movies}
                               handleClick={this.handleClick}
                           />
                       }/>
                <Route exact path='/:id'
                       render={() => (this.state.selectedMovie &&
                                <MovieInfo
                               selectedMovie={this.state.selectedMovie}
                               selectedMovieTrailer={this.state.selectedMovieTrailer}
                               handleClick={this.handleClick} />)
                       } />
                <Redirect to='/' />
              </Switch>
            </div>
          </section>
        </div>
    )
  }
}

export default App;
