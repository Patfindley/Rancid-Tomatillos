import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return this.props.movies.map(movie =>
     <Link to={`/${movie.id}`} key={movie.id}>
      <img className="card {movie.id}"
      src={movie.poster_path}
      alt={movie.title}
      id={movie.id}
      onClick={event => this.props.handleClick(event)}
      />
       </Link>
    )
  }
}

export default Movies;
