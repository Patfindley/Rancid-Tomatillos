const movieApi = "https://rancid-tomatillos.herokuapp.com/api/v2"

// export const getSingleMovie = (id) => {
//   return fetch(`${movieApi}/movies/${id}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         throw new Error(`Uh oh! We can't find the movie you're looking for!`)
//       }
//     })
// }
//
// export const getSingleMovieTrailer = (id) => {
//   return fetch(`${movieApi}/movies/${id}/videos`)
//   .then(response => {
//     if (response.ok) {
//       return response.json()
//     } else {throw new Error('Oh no! We couldnt find the trailer you were looking for!')
//
//     }
//   })
// }

export const getMovies = () => {
  return fetch(`${movieApi}/movies`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Uh oh! We're in the back looking for the movies, please try again!`)
    }
  })
}



export const getSelectedMovie = (id) => {
  const selectedMovieDetails = fetch(`${movieApi}/movies/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Uh oh! We can't find the movie you're looking for!`)
        }
      })


  const selectedMovieTrailer = fetch(`${movieApi}/movies/${id}/videos`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Oh no! We couldnt find the trailer you were looking for!')
      }
    })


  return Promise.all([selectedMovieDetails, selectedMovieTrailer])
  .then(data => {
    let allData = {};
    allData.selectedMovieDetails = data[0].movie;
    allData.selectedMovieTrailer = data[1].videos[0];
    return allData;
  })
}
