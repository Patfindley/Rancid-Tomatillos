import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import './Nav.css'

const Nav = (props) => {
  return (
    <header className="navbar">
      <div className='title'>
        Rotten Tomatillos
      </div>
      <SearchBar className='search-bar'/>
      <nav className='nav-buttons' >
        <div className='nav-button-container' >
          <h5 className='home-button'
          onClick={props.returnHome} >Home</h5>
          <h5 className='genre-button'>Search Genre</h5>
        </div>
      </nav>
    </header>
  )
}

export default Nav;
