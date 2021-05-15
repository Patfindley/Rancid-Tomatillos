import React from 'react';
import './MovieInfo.css';

// const oneMovie = {
//   "movie": {
//     id: 1,
//     title: "Fake Movie Title",
//     poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
//     backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
//     release_date: "2019-12-04",
//     overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
//     average_rating: 6,
//     genres: ["Drama"],
//     budget:63000000,
//     revenue:100853753,
//     runtime:139,
//     tagline: "It's a movie!" }}


const MovieInfo = (props) => {
  console.log(props.selectedMovie.title)
  console.log(props.selectedMovie.release_date)
  console.log(props.selectedMovie.runtime)
  console.log(props.selectedMovie.average_rating)
  console.log(props.selectedMovie.overview)
  console.log(props.selectedMovie.genres)
  return (
    <div className="movie-info">
      <section className="movie-card-container">
      <img onClick={event => props.handleClick(event)}
          className='backdrop-image'
          src={props.selectedMovie.backdrop_path}
          alt={props.selectedMovie.title}
      />
      <section className='movie-card-info'>
        <p className='movie-title'>{props.selectedMovie.title}</p>
        <p className='movie-text'>{props.selectedMovie.release_date}</p>
        <p className='movie-text'>{props.selectedMovie.runtime}</p>
        <p className='movie-text'>{props.selectedMovie.average_rating}</p>
        <p className='movie-text'>{props.selectedMovie.overview}</p>
        <p className='movie-text'>{props.selectedMovie.genres}</p>
      </section>
      </section>
    </div>
  )
}

export default MovieInfo;
