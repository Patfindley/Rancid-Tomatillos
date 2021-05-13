import React from 'react';
import './MovieInfo.css';


export const MovieInfo = (props) => {
  return (
    <div>
      <section className='backdrop-container'>
        <img className='backdrop' src={props.movies.backdrop_path} />
      </section>
    </div>
  )
}
