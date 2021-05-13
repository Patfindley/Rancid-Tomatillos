import React from 'react';
import Movies from '../Movies/Movies'
import MovieInfo from '../MovieInfo/MovieInfo';

import './Cards.css';

function Cards(props) {
  return (
    <div>
    <Movies movies={props.movies}
    handleClick={props.handleClick}
    />
    </div>
  )

}

export default Cards;
