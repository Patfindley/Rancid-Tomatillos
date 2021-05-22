import React from 'react';
import './SearchBar.css'

const SearchBar = ({ handleChange, input }) => {
    return (
      <form className='search-bar'>
        <input
          type='text'
          placeholder='Search By Title'
          name='input'
          value={input}
          onChange={event => handleChange(event)}
          />
      </form>
    )
}

export default SearchBar;
