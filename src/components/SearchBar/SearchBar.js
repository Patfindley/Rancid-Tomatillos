import React from 'react';

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
      <form>
        <input
          type='text'
          placeholder='Find a Movie'
          name='input'
          value={this.state.input}
          onChange={event => this.handleChange(event)}
          />
      </form>
    )
  }
}

export default SearchBar;
