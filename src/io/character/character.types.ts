export type Character = {
  name: string;
  height: number;
  gender: 'n/a' | 'male' | 'female';
};

export type CharacterState = {
  characters: Character[];
};

export const SET_LOADING_CHARACTERS = 'SET_LOADING_CHARACTERS';
export const GET_CHARACTERS = 'GET_CHARACTERS';

type setLoadingCharacter = {
  type: typeof SET_LOADING_CHARACTERS;
  payload: boolean;
};

type getCharacters = {
  type: typeof GET_CHARACTERS;
  payload: Character[];
};

export type CharacterActionTypes = setLoadingCharacter | getCharacters;
