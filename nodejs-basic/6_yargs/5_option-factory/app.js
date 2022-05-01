const yargs = require('yargs')
let movies = require('./database/movies')
const { id, producer, title } = require('./option')

yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: () => console.log(movies)
  })
  .command({
    command: 'find',
    describe: 'Find a movie by id',
    builder: { id },
    handler: ({ id }) => console.log(movies.find(movie => movie.id === id))
  })
  .command({
    command: 'create',
    describe: 'Create new movie',
    builder: { producer, title },
    handler: (producer, title) => {
      // első lépésként generálnunk kell egy id-t
      // sorbarendezzük, hogy megtudjuk határozni a legnagyobb id-t
      const sortedMovies = [...movies].sort((a,b) => a.id > b.id)
      const id = sortedMovies[sortedMovies.length - 1].id + 1
      // létrehozzuk az új movie objectet
      const movie = { id, producer, title }
      movies = [...movies, movie]
      console.log(movies.find(movie => movie.id === id))
    }
  })
  .command({
    command: 'edit',
    describe: 'Edit a movie',
    builder: { id, producer, title },
    handler: ({ id, producer, title }) => {
      movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie )
      console.log(movies.find(movie => movie.id === id))
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a movie by ID',
    builder: { id },
    handler: ({ id }) =>{
      movies = movies.filter(movie => movie.id !== id)
      //console.log(movies.find(movie => movie.id === id))
      console.log('deleted')
    }
  })
  .locale('en')
  .strict()
  .help()
  .parse()
