import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies =({ movies, filteredMovies, handleClick, inputValue, renderSearchError }) => {
  if (filteredMovies.length) {
    return filteredMovies.map(movie => {
     return <Link to={`/${movie.id}`} key={movie.id}>
      <img className="card {movie.id}"
      src={movie.poster_path}
      alt={movie.title}
      id={movie.id}
      onClick={event => handleClick(event)}
      />
       </Link>
    })
  } else if (inputValue && !filteredMovies.length) {
    console.log(movies.length, 'error movies')
    console.log(filteredMovies.length, 'filtered')
      return renderSearchError()
    } else {
    return movies.map(movie => {
      console.log(movies.length, 'movies')
     return <Link to={`/${movie.id}`} key={movie.id}>
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
