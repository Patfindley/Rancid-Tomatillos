import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import './Nav.css'

const Nav = () => {
  return (
    <header className="navbar">
      <div>
        Rotten Tomatillos
      </div>
      <SearchBar />
      <nav>
        Home
        Genre
      </nav>
    </header>
  )
}

export default Nav;
