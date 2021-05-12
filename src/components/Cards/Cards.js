import React from 'react';
import Movies from '../Movies/Movies'
import './Cards.css';

function Cards(props) {
  return <Movies movies={props.movies} />
}

export default Cards;