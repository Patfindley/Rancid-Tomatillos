import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies =({ movies, filteredMovies, handleClick, inputValue, renderSearchError }) => {
  if (filteredMovies.length) {
    return filteredMovies.map(movie => {
     return <Link className="movie-link" to={`/${movie.id}`} key={movie.id}>
      <img className="card {movie.id}"
      src={movie.poster_path}
      alt={movie.title}
      id={movie.id}
      onClick={event => handleClick(event)}
      />
       </Link>
    })
  } else if (inputValue && !filteredMovies.length) {
    return renderSearchError()
    } else {
    return movies.map(movie => {
     return <Link className="movie-link" to={`/${movie.id}`} key={movie.id}>
      <img className="card {movie.id}"
      src={movie.poster_path}
      alt={movie.title}
      id={movie.id}
      onClick={event => handleClick(event)}
      />
       </Link>
    })
  }
}

export default Movies;
