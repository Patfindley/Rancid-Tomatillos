import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
  const trailerLoc = `https://www.youtube.com/embed/${props.selectedMovieTrailer[0].key}`
  const runtime = (props) => {
    let num = (props.selectedMovie.runtime / 60)
    let roundNum = Math.floor(num);
    let minutes = (num - roundNum) * 60
    let roundMin = Math.round(minutes);
    return `${roundNum}h ${roundMin}m`
  }
  // console.log(props.selectedMovie.title)
  // console.log(props.selectedMovie.release_date)
  // console.log(props.selectedMovie.runtime)
  // console.log(props.selectedMovie.average_rating)
  // console.log(props.selectedMovie.overview)
  // console.log(props.selectedMovie.genres)
  return (
    <div className='movie-card-container'>
      <iframe width="900" height="506"
      src={trailerLoc}
      title="YouTube video player" frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      > 'ello
      </iframe>
      <div className='movie-stats-container'>
        <img
        // onClick={event => props.handleClick(event)}
          className='backdrop-img'
          src={props.selectedMovie.poster_path}
          alt={props.selectedMovie.title}
          />
        <div className='movie-stats'>
          <h3 className='movie-title'>{props.selectedMovie.title}</h3>
          <p className='release-genre-run'>{props.selectedMovie.release_date.split('-').join('/')}, {props.selectedMovie.genres.join('/')}, {runtime(props)}</p>
          <p className='movie-rating'>Average Rating: {props.selectedMovie.average_rating.toFixed(1)}/10</p>
        </div>
      </div>
      <p className='movie-overview'>Overview: {props.selectedMovie.overview}</p>
    </div>
  )
}

// <p className='movie-runtime'>Runtime: {props.selectedMovie.runtime}</p>
// <p className='movie-genre'>{props.selectedMovie.genres}</p>
export default MovieInfo;
