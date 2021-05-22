import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies =({ movies, filteredMovies, handleClick }) => {
  console.log(movies, filteredMovies, 'Movies')
  if (filteredMovies.length) {
    return filteredMovies.map(movie => {
     return <Link to={`/${movie.id}`} key={movie.id}>
      <img className="card {movie.id}"
      src={movie.poster_path}
      alt={movie.title}
      id={movie.id}
      onClick={event => this.props.handleClick(event)}
      />
       </Link>
    })
  } else {
    return movies.map(movie => {
     return <Link to={`/${movie.id}`} key={movie.id}>
      <img className="card {movie.id}"
      src={movie.poster_path}
      alt={movie.title}
      id={movie.id}
      onClick={event => this.props.handleClick(event)}
      />
       </Link>
    })
  }
}

export default Movies;
