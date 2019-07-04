import { Meta } from '../meta/meta.types';

export type Film = {
  id: number;
  title: string;
  episode_id: number;
  characters: number[];
};

export type FilmState = {
  films: Film[];
  meta: Meta;
};

export const SET_LOADING_FILMS = 'SET_LOADING_FILMS';
export const GET_FILMS = 'GET_FILMS';

type setLoadingFilm = {
  type: typeof SET_LOADING_FILMS;
  payload: boolean;
};

type getFilms = {
  type: typeof GET_FILMS;
  payload: {
    films: Film[];
    meta: Meta;
  };
};

export type FilmActionTypes = setLoadingFilm | getFilms;
