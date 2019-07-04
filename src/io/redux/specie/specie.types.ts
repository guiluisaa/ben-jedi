export type Specie = {
  id: number;
  name: string;
};

export type SpecieState = {
  species: Specie[];
};

export const GET_SPECIE = 'GET_SPECIE';

type getSpecie = {
  type: typeof GET_SPECIE;
  payload: Specie;
};

export type SpecieActionTypes = getSpecie;
