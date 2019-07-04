import { Meta } from '../meta/meta.types';

export type Character = {
  id: number;
  name: string;
  height: number;
  birth_year: string;
  gender: 'n/a' | 'male' | 'female';
  homeworld: number[];
  species: number[];
};

export type CharacterState = {
  characters: Character[];
  meta: Meta;
};

export const SET_LOADING_CHARACTERS = 'SET_LOADING_CHARACTERS';
export const GET_CHARACTERS = 'GET_CHARACTERS';

type setLoadingCharacter = {
  type: typeof SET_LOADING_CHARACTERS;
  payload: boolean;
};

type getCharacters = {
  type: typeof GET_CHARACTERS;
  payload: {
    characters: Character[];
    meta: Meta;
  };
};

export type CharacterActionTypes = setLoadingCharacter | getCharacters;
