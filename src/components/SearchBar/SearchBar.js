import React from 'react';
import './SearchBar.css'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form className='search-bar'>
        <input
          type='text'
          placeholder='Search By: Title, Genre, Rating'
          name='input'
          value={this.state.input}
          onChange={event => this.handleChange(event)}
          />
      </form>
    )
  }
}

export default SearchBar;
