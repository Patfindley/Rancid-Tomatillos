import React from 'react';
import './Movies.css';

class Movies extends React.Component {
  constructor ({id, poster_path, backdrop_path, title, average_rating, release_date}) {
    super({id, poster_path, backdrop_path, title, average_rating, release_date})
    this.state = {
    }
    console.log(id)
  }
  
  render() {
    return (
        <h2>MoviesClass</h2>
    )
  }
}

export default Movies; 
