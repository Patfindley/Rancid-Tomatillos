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
  return (
    <div className="movie-info">
      <section className='backdrop-container'>
        <img
        className='backdrop'
        src={props.selectedMovie.backdrop_path}
        alt={props.selectedMovie.titles}
        onClick={event => props.handleClick(event)}
        />
      </section>
    </div>
  )
}

export default MovieInfo;
