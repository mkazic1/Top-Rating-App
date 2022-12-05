/* eslint-disable indent */
import { Reducer } from 'react';
import { SEARCH_TVSHOWS } from '../../constants';
import TvShowsInitialStateInterface from '../../interfaces/TvShowsInitialStateInterface';
import PayloadActionInterface from '../../interfaces/PayloadActionInterface';

const initialState: TvShowsInitialStateInterface = {
  searchTerm: '',
  movies: [],
  loading: false,
  movie: { id: 0, name: '', poster_path: '', release_date: '', overview: '', vote_average: 0 }
}

const movieSlice: Reducer<TvShowsInitialStateInterface, PayloadActionInterface> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SEARCH_TVSHOWS:
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
