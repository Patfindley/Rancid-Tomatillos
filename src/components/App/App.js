import React, { Component } from 'react';
import Cards from '../Cards/Cards.js';
import movieData from '../../MovieData';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
        <div>
        <nav>
          <h3>NavBar</h3>
        </nav>
        <Cards movies = {this.state.movies} />
        </div>
    )
  }
}


export default App;
