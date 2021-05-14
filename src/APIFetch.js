export const getSingleMovie =(id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`Uh oh! We can't find the movie you're looking for!`)
      }
    })
}


export const getMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Uh oh! We're in the back looking for the movies, please try again!`)
    }
  })
}
