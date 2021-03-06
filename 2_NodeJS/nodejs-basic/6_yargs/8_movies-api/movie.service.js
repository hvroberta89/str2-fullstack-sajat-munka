const MoviesService = (moviesApi) => {
  let movies = moviesApi.get()

  const getAllMovies = () => movies

  const findMovieById = (id) => movies.find(movie => movie.id === id)

  const generateNewMovieId = () => {
    // első lépésként generálnunk kell egy id-t
    // sorbarendezzük, hogy megtudjuk határozni a legnagyobb id-t
    const sortedMovies = [...movies].sort((a, b) => a.id > b.id)
    return sortedMovies[sortedMovies.length - 1].id + 1
  }

  const createMovie = ({ producer, title }) => {
    // létrehozzuk az új movie objectet
    const movie = { id: generateNewMovieId(), producer, title }
    movies = [...movies, movie]
    return movie
  }

  const editMovie = ({ id, producer, title }) => {
    movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie)
    return findMovieById(id)
  }

  const removeMovie = (id) => {
    movies = movies.filter(movie => movie.id !== id)
  }

  return {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
  }
}

module.exports = MoviesService