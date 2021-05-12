import React, { Component } from 'react';
import Cards from '../Cards/Cards.js'
// import movieData from './MoviesData.js'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
        <div>
        <nav>
          <h3>NavBar</h3>
        </nav>
        <Cards />
        </div>
    )
  }
}


export default App;
