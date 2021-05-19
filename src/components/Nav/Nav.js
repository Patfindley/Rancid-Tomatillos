import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <header className="navbar">
      <Link to="/" style={{textDecoration:'none'}} >
      <div className='title'>
        Rotten Tomatillos
      </div>
      </Link >
      <SearchBar className='search-bar'/>
      <nav className='nav-buttons' >
        <div className='nav-button-container' >
          <Link to="/" style={{textDecoration:'none'}}>
          <h5 className='home-button'>Home</h5>
          </Link >
          <h5 className='genre-button'>Search Genre</h5>
        </div>
      </nav>
    </header>
  )
}

export default Nav;
