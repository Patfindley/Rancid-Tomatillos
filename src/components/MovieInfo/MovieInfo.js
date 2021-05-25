import React from 'react';
import './MovieInfo.css';
import { Link } from 'react-router-dom';
import tomato from './tomato.svg'

const MovieInfo = ({ selectedMovie, selectedMovieTrailer, handleClick }) => {
  const rating = Math.round(selectedMovie.average_rating)
  const tomats = Array(rating).fill(tomato)
  const printRating = () => {
    return tomats.map(image => {
      return (
        <img className="tomatillo" src={image} alt='tomatillo' key={Math.random()}/>
      )
    })
  }
  const trailerLoc = `https://www.youtube.com/embed/${selectedMovieTrailer.key}`
  const runtime = (selectedMovie) => {
    let num = (selectedMovie.runtime / 60)
    let roundNum = Math.floor(num);
    let minutes = (num - roundNum) * 60
    let roundMin = Math.round(minutes);
    return `${roundNum}h ${roundMin}m`
  }

  return (
    <div className='movie-card-container' style={{
      backgroundImage: `url(${selectedMovie.backdrop_path})`
      }}>
      <iframe width="900" height="506"
        src={trailerLoc}
        alt={selectedMovie.title}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <div className='movie-stats-container'>
        <img
          className='backdrop-img'
          src={selectedMovie.poster_path}
          alt={selectedMovie.title}
        />
        <div className='movie-stats stats-wrap'>
          <h3 className='movie-title'>{selectedMovie.title}</h3>
          <h3 className='tagline'>{selectedMovie.tagline}</h3>
          <p className='release-genre-run'>{selectedMovie.release_date.split('-').join('/')}, {selectedMovie.genres.join('/')}, {runtime(selectedMovie)}</p>
          <p className='movie-rating'>Average Rating: {selectedMovie.average_rating.toFixed(1)}/10</p>
          <div className="tomatillo-container">
          {printRating()}
          </div>
          <Link to="/" style={{textDecoration:'none'}}>
          </Link >
        </div>
      </div>
      <div className="overview-container stats-wrap">
      <p className='movie-overview'>{selectedMovie.overview}</p>
        <Link to="/" style={{textDecoration:'none'}}>
          <h5 className='home-button'>Return Home</h5>
        </Link >
      </div>
    </div>
  )
}

export default MovieInfo;
