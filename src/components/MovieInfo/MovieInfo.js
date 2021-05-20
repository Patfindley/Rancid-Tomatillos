import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
  console.log(props, 'movieinfo')
  // const style = {{backgroundImage: props.selectedMovie.backdrop_path}}
  const trailerLoc = `https://www.youtube.com/embed/${props.selectedMovieTrailer.key}`
  const runtime = (props) => {
    let num = (props.selectedMovie.runtime / 60)
    let roundNum = Math.floor(num);
    let minutes = (num - roundNum) * 60
    let roundMin = Math.round(minutes);
    return `${roundNum}h ${roundMin}m`
  }

  return (
    <div className='movie-card-container' style={{
      backgroundImage: `url(${props.selectedMovie.backdrop_path})`
    }}>
      <iframe width="900" height="506"
      src={trailerLoc}
      alt={props.selectedMovie.title}
      title="YouTube video player" frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      >
      </iframe>
      <div className='movie-stats-container'>
        <img
          className='backdrop-img'
          src={props.selectedMovie.poster_path}
          alt={props.selectedMovie.title}
          />
        <div className='movie-stats'>
          <h3 className='movie-title'>{props.selectedMovie.title}</h3>
          <p className='release-genre-run'>{props.selectedMovie.release_date.split('-').join('/')}, {props.selectedMovie.genres.join('/')}, {runtime(props)}</p>
          <p className='movie-rating'>Average Rating: {props.selectedMovie.average_rating.toFixed(1)}/10</p>
          <p className='movie-overview'>Overview: {props.selectedMovie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;
