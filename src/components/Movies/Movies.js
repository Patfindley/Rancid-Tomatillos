import React from 'react';
import './Movies.css';
import MovieInfo from '../MovieInfo/MovieInfo';



class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return this.props.movies.map(movie =>
      <img className="card"
      src={movie.poster_path}
      alt={movie.title}
      key={movie.id}
      onClick={event => this.props.handleClick(event)}
      />
    )
  }
}

export default Movies;
