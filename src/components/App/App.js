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
      displayMovieInfo: false,
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

  returnHome = () => {
    this.setState({
      displayMovieInfo: false
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
          displayMovieInfo={this.state.displayMovieInfo}
          returnHome={this.returnHome}
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
                       render={() => (
                         // const { id } = match.params;
                         // const movieToRender = this.state.movies.find(movie => movie.id === parseInt(id));
                           this.state.displayMovieInfo && <MovieInfo 
                             selectedMovie={this.state.selectedMovie}
                             selectedMovieTrailer={this.state.selectedMovieTrailer}
                             handleClick={this.handleClick} /> 
                       )} />
                         <Redirect to='/' />
              </Switch>
            </div>
          </section>
        </div>
    )
  }
}

export default App;


{/*{this.state.error && <h1 className="load-error">{this.state.error}</h1>}*/}
{/*{this.state.displayMovieInfo && this.state.selectedMovie && this.state.selectedMovieTrailer &&*/}

{/*}*/}
{/*{!this.state.displayMovieInfo &&*/}
