import TvShowsInterface from './TvShowsInterface'

export default interface TvShowsInitialStateInterface {
  searchTerm: string
  movies: TvShowsInterface[]
  loading: boolean
  movie: TvShowsInterface
}
