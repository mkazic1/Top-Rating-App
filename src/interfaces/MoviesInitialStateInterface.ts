import MoviesInterface from './MoviesInterface'

export default interface MoviesInitialStateInterface {
  searchTerm: string
  movies: MoviesInterface[]
  loading: boolean
  movie: MoviesInterface
}
