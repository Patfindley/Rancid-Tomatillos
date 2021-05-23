// export const movieDataCleaner = (data) => {
//   console.log(data,'top singlemoiveclean')
//   let cleanedData = data;
//   // let cleanMoviesData = [];
//   console.log({...cleanedData})
//   return cleanedData.map(item => {
//     console.log(item)
//     const {
//       id, key, title, poster_path, backdrop_path, release_date,
//       overview, genres, runtime, average_rating} = item;
//     console.log(item)
//     return { id, key, title, poster_path, backdrop_path, release_date,
//       overview, genres, runtime, average_rating} ;
//   });
// }
//
// export const movieTrailerCleaner = (data) => {
//   let cleanedData = data.movie.video;
//   return cleanedData.map(video => {
//     const {id, movie_id, key} = video;
//     return {id, movie_id, key}
//   });
// }