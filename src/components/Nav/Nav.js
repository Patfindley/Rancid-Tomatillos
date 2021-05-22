import React from 'react';
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({ handleChange, input, movies }) => {
  return (
    <header className="navbar">
      <Link to="/" style={{textDecoration:'none'}} >
      <div className='title'>
        Rotten Tomatillos
      </div>
      </Link >
      {movies.length &&
        <form className='search-bar'>
          <input
            type='text'
            placeholder='Search By Title'
            name='input'
            value={input}
            onChange={event => handleChange(event)}
            />
        </form>}
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

// <SearchBar className='search-bar'
//   handleChange={handleChange}
//   input={input}
// />
