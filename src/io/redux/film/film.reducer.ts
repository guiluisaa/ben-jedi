import {
  GET_FILMS,
  SET_LOADING_FILMS,
  FilmActionTypes,
  FilmState
} from './film.types';

const initialState: FilmState = {
  films: [],
  meta: {
    page: 1,
    count: 0,
    previous: null,
    next: null
  }
};

const filmReducer = (state = initialState, action: FilmActionTypes) => {
  switch (action.type) {
    case SET_LOADING_FILMS:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_FILMS:
      return {
        ...state,
        films: action.payload.films,
        meta: action.payload.meta
      };
    default:
      return state;
  }
};

export default filmReducer;
