export const singleMovieCleaner = (data) => {
  console.log(data,'top singlemoiveclean')
  let cleanedData = data;
  console.log(cleanedData)
  const cleanMovie = cleanedData.map(movie => {
    console.log("hi")
    const {
      id, title, poster_path, backdrop_path, release_date,
      overview, genres, runtime, average_rating
    } = movie;
    console.log(movie)
    return { id, title, poster_path, backdrop_path, release_date,
      overview, genres, runtime, average_rating}
  });
  return cleanMovie
}

export const movieTrailerCleaner = (data) => {
  let cleanedData = data.movie.video;
  return cleanedData.map(video => {
    const {id, movie_id, key} = video;
    return {id, movie_id, key}
  });
}