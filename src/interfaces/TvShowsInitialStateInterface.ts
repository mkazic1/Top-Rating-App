import TvShowsInterface from '../components/TvShows/TvShowsInterface'

export default interface TvShowsInitialStateInterface {
  searchTerm: string
  movies: TvShowsInterface[]
  loading: boolean
  movie: TvShowsInterface
}
