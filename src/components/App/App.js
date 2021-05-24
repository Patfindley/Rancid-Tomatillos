import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import Movies from '../Movies/Movies'
import MovieInfo from '../MovieInfo/MovieInfo';
import {getMovies, getSelectedMovie} from '../../APIFetch'
import {Redirect, Route, Switch, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      selectedMovieTrailer: null,
      filteredMovies: [],
      input: "",
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
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({input: event.target.value})
    this.searchMovies()
  }

  searchMovies = () => {
    const filterMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.input.toLowerCase())
    })
    this.renderFilteredMovies(filterMovies)
  }

  renderFilteredMovies = filteredMovies => {
    this.setState({filteredMovies: filteredMovies})
  }

  renderSearchError = () => {
    return (
      <article className="display-error">
        <h4 className="error-message">We couldn't find that movie, try something else!</h4>
      </article>
    )
  }

  renderError = () => {
    return (
      <article className="display-error">
        <h3>{this.state.error}</h3>
          <Link to='/'>
            <h4 className="back-to-home" onClick={() => this.setState({error: ""})}>
              Back To Main
            </h4>
          </Link>
      </article>
    )
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
              <Switch>
                <Route exact path='/'
                       render={() => (
                        !this.state.error ?
                            <Movies
                            movies={this.state.movies}
                            filteredMovies={this.state.filteredMovies}
                            handleClick={this.handleClick}
                            renderSearchError={this.renderSearchError}
                            inputValue={this.state.input}
                            /> : this.renderError()
                        )}/>
                <Route exact path='/:id'
                       render={() => (this.state.selectedMovie &&
                        !this.state.error ?
                          <MovieInfo
                            selectedMovie={this.state.selectedMovie}
                            selectedMovieTrailer={this.state.selectedMovieTrailer}
                            handleClick={this.handleClick} /> : this.renderError()
                        )}/>
              </Switch>
              <Redirect to = "/" />
          </section>
        </div>
    )
  }
}

export default App;
