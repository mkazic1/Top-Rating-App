/* eslint-disable indent */
import { Reducer } from 'redux';
import { SEARCH_MOVIES } from '../../constants';
import MoviesInitialStateInterface from '../../interfaces/MoviesInitialStateInterface';
import PayloadActionInterface from '../../interfaces/PayloadActionInterface';

const initialState: MoviesInitialStateInterface = {
  searchTerm: '',
  movies: [],
  loading: false,
  movie: { id: 0, title: '', poster_path: '', release_date: '', overview: '', vote_average: 0 }
}

const movieSlice: Reducer<MoviesInitialStateInterface, PayloadActionInterface> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        searchTerm: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default movieSlice;
