import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({ handleChange, input, movies }) => {
  return (
    <header className="nav-bar">
      <Link to="/" style={{textDecoration:'none'}} >
        <div className='title'>
          <h5 className='header-button'>Rotten Tomatillos</h5>
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
            <Link to="/" style={{textDecoration:'none'}}>
            <h5 className='home header-button'>Home</h5>
            </Link >
        </nav>
    </header>
  )
}

export default Nav;

// <SearchBar className='search-bar'
//   handleChange={handleChange}
//   input={input}
// />
