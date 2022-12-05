import { combineReducers } from 'redux';
import movieSlice from './movieSlice';
import tvShowSlice from './tvShowSlice';

export default combineReducers({
  movies: movieSlice,
  tvShows: tvShowSlice
});
