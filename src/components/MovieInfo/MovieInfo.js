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
  const trailerLoc = `https://www.youtube.com/embed/${props.selectedMovieTrailer[0].key}`
  // console.log(props.selectedMovie.title)
  // console.log(props.selectedMovie.release_date)
  // console.log(props.selectedMovie.runtime)
  // console.log(props.selectedMovie.average_rating)
  // console.log(props.selectedMovie.overview)
  // console.log(props.selectedMovie.genres)
  return (
    <div className='movie-card-container'>
      <iframe width="560" height="315"
      src={trailerLoc}
      title="YouTube video player" frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      > 'ello
      </iframe>
      <div className='movie-stats-container'>
        <img onClick={event => props.handleClick(event)}
          className='backdrop-img'
          src={props.selectedMovie.poster_path}
          // alt={props.selectedMovie.title}
          />
        <div className='movie-stats'>
          <h3 className='movie-title'>{props.selectedMovie.title}</h3>
          <p className='release-genre-run'>{props.selectedMovie.release_date}, {props.selectedMovie.genres.join('/')}, {props.selectedMovie.runtime}</p>
          <p className='movie-runtime'>Runtime: {props.selectedMovie.runtime}</p>
          <p className='movie-rating'>Average Rating: {props.selectedMovie.average_rating}</p>
          <p className='movie-genre'>{props.selectedMovie.genres}</p>
        </div>
      </div>
      <p className='movie-overview'>Overview: {props.selectedMovie.overview}</p>
    </div>
  )
}

export default MovieInfo;
