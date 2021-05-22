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
      filteredMovies: [],
      input: '',
      error: ""
    }
  }

  componentDidMount = async() => {
    await getMovies()
        .then(data => {
          this.setState({movies: data.movies})
  })
    .catch(error => {
      this.setState({error: error.message})
    })
    await console.log(this.state.movies)
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

  handleChange = (event) => {
    this.setState({input: event.target.value})
    this.searchMovies()
  }

  searchMovies = () => {
    const splitInput = this.state.input.split('');
    const filterMovies = this.state.movies.filter(movie => {
      const foundMovies = movie.title.toLowerCase().includes(this.state.input.toLowerCase())
      return foundMovies
    })
    console.log(filterMovies, 'search Movies')
    this.renderFilteredMovies(filterMovies)
  }

  renderFilteredMovies = filteredMovies => {
    this.setState({filteredMovies: filteredMovies})
  }

  render() {
    return (
        <div className='site-container'>
          {this.state.movies &&
          <Nav
            handleChange={this.handleChange}
            input={this.state.input}
            movies={this.state.movies}
          />
          }
          <section className='movie-display'>
            <div className="card-container">
              <Switch>
                <Route exact path='/'
                       render={() =>
                          !this.state.filteredMovies.length &&
                          <Cards
                          movies={this.state.movies}
                          handleClick={this.handleClick}
                          />
                       }/>
                       <Route exact path='/search'
                              render={() =>
                                 this.state.filteredMovies.length &&
                                 <Cards
                                 movies={this.state.filteredMovies}
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
